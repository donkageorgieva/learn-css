import Link from "next/link";

interface Props {
  link: string;
  text?: string;
}

const LinkButton = ({ link, text }: Props) => {
  return (
    <Link
      href={link}
      className=" inline-block py-2 px-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  focus:outline-none   font-medium rounded-lg  text-center "
    >
      {text && text}
    </Link>
  );
};

export default LinkButton;
