import NewMeetForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from 'next/head';

const NewMeetupPage = () => {
  const router = useRouter();
  
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(enteredMeetupData),
    });

    const data = await response.json();
    console.log(data);

    router.push('/');
  };

  return <>
  <Head>
    <title>Add a New Meetup</title>
    <meta name="description" content="Add your own meetups and create amazing opportunities."/>
  </Head>
  <NewMeetForm onAddMeetup={addMeetupHandler} />
  </>
};

export default NewMeetupPage;
