import ExploreBtn from "@/components/ExploreBtn";
import EventCrad from "@/components/EventCard";
const events =[
  { image:'/images/event1.png', title:'Event 1', slug:'event-1', location:'Cairo, Egypt', date:'2024-07-15', time:'10:00 AM'},
  { image:'/images/event2.png', title:'Event 2', slug:'event-2', location:'Alexandria, Egypt', date:'2024-08-20', time:'2:00 PM'},
  { image:'/images/event3.png', title:'Event 3', slug:'event-3', location:'Giza, Egypt', date:'2024-09-10', time:'11:00 AM'},
  { image:'/images/event4.png', title:'Event 4', slug:'event-4', location:'Luxor, Egypt', date:'2024-10-05', time:'3:00 PM'},
]
const page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev <br />Event You Can't Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event)=>(
            <li style={{ listStyle: "none" }} key={event.title}><EventCrad {... event} /></li>))}
        </ul>
      </div>
    </section>
  )
}

export default page