import Link from "next/link";

interface Props {
  link: string;
  text?: string;
}

const LinkButton = ({ link, text }: Props) => {
  return (
    <Link
      href={link}
      className=" inline-block py-2 px-3 bg-gradient-to-bl text-white from-teal-500 to-sky-500 transition-all duration-500 hover:shadow-md rounded hover:bg-gradient-to-tl"
    >
      {text && text}
    </Link>
  );
};

export default LinkButton;
