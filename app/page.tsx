import Card from "@/components/UI/Card";
import LinkButton from "@/components/UI/LinkButton";

export default function Home() {
  return (
    <main className="md:my-10">
      <div className=" flex  justify-center">
        <div className="basis-full md:basis-3/4 lg:basis-2/4">
          <h1 className="mb-2">Hi!</h1>
          <p>
            Welcome to the "Flexbox Mastery Hub," your all-in-one platform for
            learning and mastering CSS Flexbox. Whether you're a beginner
            looking to understand the fundamentals or an experienced developer
            aiming to fine-tune your skills, our platform has you covered.
          </p>
        </div>
      </div>

      <p></p>
      <ul className="mt-10 md:flex gap-10">
        <li>
          <Card
            title="Mastering Flexbox CSS Quiz"
            description={`Test your knowledge with our CSS Flexbox quiz. From alignment to responsive design, our quizzes provide an engaging and educational experience..`}
          >
            <LinkButton link="quiz" text="Quiz" />
          </Card>
        </li>
        <li>
          <Card>
            <LinkButton link="practice" text="Practice Now" />
          </Card>
        </li>
      </ul>
    </main>
  );
}
