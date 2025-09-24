import Event_card from "./Event_card.jsx";
import Pin from "./Pin.jsx"
const Opportunity_board = () => {
    return (
        <div className="board">
             <div className="card-wrapper">
                 <Pin/>
                <Event_card
                        eventName = 'HOUSTON TECHNOLOGY SUMMIT 2025'
                        imageSrc = "https://2670073.fs1.hubspotusercontent-na1.net/hubfs/2670073/Hypr-HTS-2025%20(2).jpg"
                        date = "Sept 25 2025"
                        desc="one-day conference geared toward enterprise IT professionals"
                        buttonLink = "https://eitevents.com/event_pages/houston-technology-summit-2025/"
                    />
             </div>
             <div className="card-wrapper">
                    <Pin/>
             <Event_card
                eventName = 'Tech for Social Good Hackathons'
                imageSrc = "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/674/456/datas/large.png"
                date = "Nov 25 2025"
                desc="Build innovative tech solutions to address socially focused organization’s challenges."
                buttonLink = "https://www.jpmorganchase.com/careers/explore-opportunities/programs/tfsg-hackathons"
            />
             </div>
               <div className="card-wrapper">
                  <Pin/>
              <Event_card
                eventName = 'Grace Hopper Celebration (GHC) 2025'
                imageSrc = "https://ghc.anitab.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5izrne2g%2Fproduction%2F5cbb83efb28492e1164a04f40c2e4a8c946a433e-384x241.png&w=1920&q=75"
                date = "Nov 4 2025"
                desc="GHC brings together voices that challenge, inspire, and reimagine the future of technology"
                buttonLink = "https://ghc.anitab.org/"
            />                
             </div>
               <div className="card-wrapper">
                 <Pin/>
                 <Event_card
                eventName = 'IBM TechXchange 2025 Pre-conference watsonx Hackathon'
                imageSrc = "data:image/jpeg;base64,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"
                date = "Aug 1 2025"
                desc="Dive into the power of AI agents to build cutting-edge solutions that tackle real-world problems"
                buttonLink = "https://developer.ibm.com/events/ibm-techxchange-2025-pre-conference-watsonx-hackathon/"
            />
             </div>
               <div className="card-wrapper">
                <Pin/>
              <Event_card
                eventName = 'Global Hack Week: Open Source Week'
                date = "Aug 1 2025"
                imageSrc = "https://events.mlh.io/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbElwIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2488b587dc8d88728482abb6beaebb256eb5051e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFeU1EQjROakF3SVFZN0JsUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e95a9989726607e7d6ee02cb34a6a4d9a8bf29c1/website.jpg"
                desc="Complete technical challenges, network with the community, enjoy fun live sessions, build technical projects, and make new memories."
                buttonLink = "https://events.mlh.io/events/11512"
            />                
             </div>

             <div className="card-wrapper">
                 <Pin/>
                 <Event_card
                eventName = 'HackSMU VII'
                date = "OCT 1 2025"
                imageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMWElKtd3z1npSYo16iWP4nzKJNLUCMt6KQ&s"
                desc="A platform for entrepreneurs, designers, and developers to unlock their creativity and drive positive social impact."
                buttonLink = "https://developer.ibm.com/events/ibm-techxchange-2025-pre-conference-watsonx-hackathon/"
            />
             </div>
             <div className="card-wrapper">
                 <Pin/>
                 <Event_card
                eventName = 'DIVHACKS 2025'
                date = "Oct 4 2025"
                imageSrc = "https://www.columbiadivhacks.org/static/media/aboutcard.f45ab24ab0dc6fd5efc8.png"
                desc="Columbia University's premier student-led annual diversity hackathon run by Women in Computer Scienc"
                buttonLink = "http://columbiadivhacks.org/"
            />
            </div>
             <div className="card-wrapper">
                 <Pin/>
                 <Event_card
                eventName = 'RowdyHacks XI'
                date = "Aug 3 2025"
                imageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-EMsmexFoyeo07boo4AQ3vx68yQb0zZkdw&s"
                desc="Every year, a committee of members get together to help plan and organize the largest hackathon in San Antonio, TX to accommodate hundreds of students, sponsors, volunteers, and mentors."
                buttonLink = "https://rowdyhacks.org/"
                />
            </div>
             <div className="card-wrapper">
                 <Pin/>
                 <Event_card
                eventName = 'Boston Hacks'
                date = "Oct 11 2025"
                imageSrc = "https://bostonhacks.org/_next/static/media/llama_balloon.4f70c460.png"
                desc="Every year, a committee of members get together to help plan and organize the largest hackathon in San Antonio, TX to accommodate hundreds of students, sponsors, volunteers, and mentors."
                buttonLink = "https://bostonhacks.org/"
                />
            </div>
            <div className="card-wrapper">
                 <Pin/>
                 <Event_card
                eventName = 'HackTX'
                date = "Oct 18 2025"
                imageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8AA_0FXZ4y9jiDEcrs0ceD2gO1cWLG6kGGA&s"
                desc="his hackathon serves to provide an electric environment where the creators of tomorrow can collaborate to learn, create change, and, above all, have fun creating something new! "
                buttonLink = "https://hacktx.com/"
                />
            </div>
            
            
               
        </div>
    )

}
export default Opportunity_board