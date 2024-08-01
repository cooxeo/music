import Link from 'next/link';

const Menu = () => {
  const menu = `flex gap-x-24 text-sm`;

  return (
    <>
      <ul className={menu} id='menu'>
        <li>
          <Link href={'/'}>WHAT WE DO</Link>
        </li>
        <li>
          <Link href={'/'}>WHO WE ARE</Link>
        </li>
        <li>
          <Link href={'/'}>BEING HERE</Link>
        </li>
        <li>
          <Link href={'/'}>CAREERS</Link>
        </li>
      </ul>
    </>
  );
};
export default Menu;
