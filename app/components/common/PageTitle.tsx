interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="uppercase text-4xl md:text-[55px] text-center
    font-bold text-secondary">{title}</div>
  );
}