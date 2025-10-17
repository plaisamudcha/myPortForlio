function HeaderLink({ name }: { name: string }) {
  return (
    <div>
      <span className="text-primary">#</span>
      <span className="text-gray hover:text-white active:text-white hover:cursor-pointer">
        {name}
      </span>
    </div>
  );
}

export default HeaderLink;
