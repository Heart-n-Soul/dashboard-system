function NavItem({ children }) {
  return (
    <div className="flex text-secondary-1 items-center gap-3 p-2 border-none rounded-md hover:bg-secondary-4 hover:font-semibold">
      {children}
    </div>
  );
}

export default NavItem;
