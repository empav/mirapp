type FooterProps = {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
};

export const Footer = ({ title, authorLabel, createdAtLabel }: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="text-[1rem] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="text-[.8rem] text-muted-foreground truncate">
        {authorLabel}, {createdAtLabel}
      </p>
    </div>
  );
};
