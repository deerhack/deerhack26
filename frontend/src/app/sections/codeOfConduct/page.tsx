import { cabinetExtraBold, cabinetRegular } from "@/app/utils/fonts"


const codeOfConduct = () => {
  return (
    <div className={`${cabinetRegular.className} md:text-lg `}>
      <h1 className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32 `}>Code Of Conduct</h1>
      <div className="flex flex-col text-white md:px-24 px-10 text-wrap">
          <p className="mb-20 leading-loose">
            Nepal&apos;s developer community is constantly developing. We see it
            as our duty to do everything in our power to foster a welcoming and
            secure atmosphere for hackathons and the community at large. We want
            to expand the spaces where people who are otherwise discriminated
            against, harassed, or intimidated can feel safe and secure.
            Hackathons, in our opinion, may advance not just technology but also
            culture. This Code of Conduct exists not merely for its own sake but
            also as a testament to our continued dedication to resolving the
            aforementioned problems.
          </p>

          <h2 className={`text-3xl ${cabinetExtraBold.className} headings mb-5`}>Applicability</h2>
          <p className="mb-20 leading-loose">
            All participants, sponsors, and other stakeholders in DeerHack, as
            well as any projects created here, are subject to this Code of
            Conduct.
          </p>

          <h2 className={`text-3xl headings ${cabinetExtraBold.className} mb-5`}>The Short Version</h2>
          <p className="mb-20 leading-loose">
            DeerHack is dedicated to providing an inclusive hackathon
            environment for all participants, regardless of gender, gender
            identity, and expression, age, sexual orientation, disability,
            physical appearance, body size, color, ethnicity, religion (or lack
            thereof), or technological preferences. Any form of harassment of
            our participants is not acceptable. At DeerHack, profane language
            and imagery included in presentations during workshops and/or in
            internet media are not acceptable. Participants who violate these
            rules may be sanctioned or dismissed from the event. We are
            committed to providing a welcoming and encouraging developer
            community. Participants from all walks of life are welcome, and we
            respect each and every one of them.
          </p>

          <h2 className={`text-3xl headings ${cabinetExtraBold.className} mb-5`}>No Plagiarism or Re-Use of Past Work </h2>
          <p className="mb-20 leading-loose">
            Only projects developed during DeerHack will be considered. However,
            you must disclose the extent of the prior use with your submission
            if you desire to submit projects that contain previously used code
            or re-submit a project that you previously submitted to another
            hackathon. If it is discovered during an inspection that the project
            has reused code that was not disclosed with the submission, the
            organizer may ask the participant to describe the connections and
            differences between the old and new work, or they may disqualify the
            submission from receiving awards on its own merits.
          </p>

          <h2 className={`text-3xl headings ${cabinetExtraBold.className} mb-5`}>Rules for Participants:</h2>
          <ul className="mb-20 leading-loose list-disc">
            <li>
              Participants of all ages, genders, and geographies are welcome.
            </li>
            <li>
              To attend DeerHack, the age is limited to students who are between
              18 and 25 years old.
            </li>
            <li>
              Members of the organizing committee or Deerwalk Institute of
              Technology are not eligible to participate in DeerHack.
            </li>
            <li>
              Participants in IT and graphic design must be familiar with
              programming, graphic and web design, UI development, cloud
              computing, mobile computing, solutions architecture, and so on.
            </li>
            <li>
              Shortlisted applicants must produce the following documentation
              upon request of the organizers:
            </li>
            <ul className=" pl-10 leading-loose list-disc">
              <li>The applicant&apos;s college Identity Card.</li>
              <li>Examples of the candidate&apos;s work or portfolio.</li>
            </ul>
            <li className="leading-loose">
              Consumption of any illegal substances inside the Deerwalk Complex premises is strictly forbidden. If found, disciplinary actions will be taken.
            </li>
          </ul>

          <h2 className={`text-3xl headings ${cabinetExtraBold.className} mb-5`}>Rules for Team Formation</h2>
          <ul className="mb-20 leading-loose list-disc">
            <li>Teams can have a maximum of five members. <i>In special cases of individual teams, the number can be extended to 6.</i></li>
            <li>Each team must have at least three members.</li>
            <li>
              All teams should consider creating a multi-disciplinary team which
              in turn can attract benefits related to marks allotment during the
              Demo Day.
            </li>
            <li>
              Changes to team members are not allowed after team formation
              unless the committee finds the reason to be legitimate.
            </li>
          </ul>

          <h2 className={`text-3xl headings ${cabinetExtraBold.className} mb-5`}>Rules for Project Development</h2>
          <ul className="mb-20 leading-loose list-disc">
            <li>
              No development should begin before the event&apos;s actual date
              and time. Any teams found violating this condition will be
              disqualified immediately. Yet, it is recommended that you plan
              ahead of time and structure your idea.
            </li>
            <li>Written documentation and design sketches are permitted.</li>
            <li>
              Any software development tools, game engines, IDE, and programming
              language that conforms to the Creative Commons License agreement
              standard or is freely available and/or you have a license to use
              them can be used during the event.
            </li>

            <li>Upon request, proof of license must be provided.</li>
            <li>
              A team cannot produce software that encourages racism, sexuality,
              nudity, or other code of conduct violations.
            </li>
          </ul>

          <h2 className={`text-3xl headings ${cabinetExtraBold.className} mb-5`}>Rules for Project Submission</h2>
          <ul className="mb-20 leading-loose list-disc">
            <li>
              Only registered teams will be permitted to submit their product.
            </li>
            <li>
              The project&apos;s content should not be plagiarized and must be
              the team&apos;s original work.
            </li>
            <li>
              During each step of the hackathon, all teams must guarantee that
              components are submitted in the prescribed formats properly.
            </li>
            <li>
              All work will be thoroughly examined by an expert panel, and
              appropriate grades will be assigned.
            </li>
            <li>
              The panel&apos;s judgment will be final, but teams may request
              feedback from the experts.
            </li>
            <li>
              Following the completion of the third phase (Product Development),
              at least one member from each team will be required to present to
              the judges.
            </li>
          </ul>

          <h2 className={`text-3xl headings ${cabinetExtraBold.className} mb-5`}>No Harassment Policy</h2>
          <p className="mb-20 leading-loose">
            We do not tolerate any form of harassment of hackathon participants,
            including offensive verbal discrimination, public display of sexual
            material in public settings, willful disruption, intentional
            intimidation, stalking, inappropriate physical contact, unwanted
            sexual advances, and taking pictures and audio/video recordings
            without the subject&apos;s consent.
          </p>

          <h2 className={`text-3xl headings ${cabinetExtraBold.className} mb-5`}>Reporting Guidelines</h2>
          <p className="leading-loose">
            Please get in touch with a member of our staff right away if you are
            experiencing harassment, see someone else experiencing harassment,
            are worried about the event&apos;s safety and the participants&apos;
            health, find any violations of this Code of Conduct, notice any
            other suspicious activity, or have any other concerns. We will
            gladly assist participants in contacting security or in finding
            other ways to make individuals who are being harassed feel secure
            throughout the hackathon.
         
          </p>
          <p className="">
            DeerHack members will be identifiable by their distinct uniforms and
            IDs.
          </p>
          <p className="mb-20 leading-loose">All reports will be kept confidential.</p>

          <h2 className={`text-3xl headings ${cabinetExtraBold.className} mb-5`}>Consequences of Violations</h2>
          <p className="leading-loose">
            Failure to follow the above-mentioned Rules and Code of Conduct may
            result in (at the discretion of the organizers):
          </p>
          <ul className="mb-20 leading-loose list-disc">
            <li>Disqualification of the offending team.</li>
            <li>
              Barring their access to DeerHack resources and/or any facilities
              to be provided.
            </li>
            <li>Reporting of their actions to local law enforcement.</li>
          </ul>

          <h2 className={`text-3xl headings ${cabinetExtraBold.className} mb-5`}>Addressing Grievances</h2>
          <p className="mb-10 leading-loose">
            If you believe you have been falsely or unfairly accused of
            breaching this Code of Conduct, please alert a member of the
            organizing team and provide a brief summary of your grievance. Our
            committee will handle your complaint in accordance with our existing
            internal governing policies.
          </p>

          <p className="leading-loose">
          If you have questions regarding your application, contact:<br/>
          Dipan Silwal : <a href="tel:">9742827007 </a> <br/>
          Pragalva Sapkota :  <a href = "tel:">9741860722</a>
          </p>
      </div>

    </div>
  )
}

export default codeOfConduct