interface Props {
  children: JSX.Element;
  description?: string;
  title?: string;
}

const Card = ({ children, title, description }: Props) => {
  return (
    <article className="rounded shadow-lg max-w-sm p-7 ">
      {title && <h2 className="pb-2">{title}</h2>}
      {description && <p className="pt-2 pb-5 text-zinc-500">{description}</p>}
      {children}
    </article>
  );
};

export default Card;
