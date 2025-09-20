import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import './globals.css';

export default function Home() {
  return (
   <div>
    <h1>Home Page</h1>
    <Link href='/users'>Users</Link>
    <ProductCard/>
    <Link href='/users/newusers'> Fresh User</Link>
   </div>
  );
}
