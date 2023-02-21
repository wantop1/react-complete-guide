import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="BRowse a huge list of highly active React Meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export const getServerSideProps = (context) => {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.DATABASE_URL);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      })),
    },
    revalidate: 1,
  };
};

export default Home;
