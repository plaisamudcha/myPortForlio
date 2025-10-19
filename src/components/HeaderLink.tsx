function HeaderLink({ name }: { name: string }) {
  return (
    <div className="group">
      <span className="text-primary group-hover:text-primary/80 transition-colors duration-300">
        #
      </span>
      <span className="text-gray hover:text-white active:text-white hover:cursor-pointer transition-colors duration-300 text-sm sm:text-base">
        {name}
      </span>
    </div>
  );
}

export default HeaderLink;
