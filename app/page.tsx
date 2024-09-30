import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h1>Hi! My name is Muhammad Umer & this is my Resume/CV.</h1> <br />
    <p>Here are some routes where you can see my information:</p> <br />

    <ul>
      <Link href="/contact"><li>Contact</li></Link>
      <Link href="/education"><li>Education</li></Link>
      <Link href="skills"><li>Skills</li></Link>
    </ul>
    </div>
  );
}
