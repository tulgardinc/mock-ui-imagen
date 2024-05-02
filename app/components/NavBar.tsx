"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Image from "next/image";

type NavLink = {
  name: string;
  route: string;
};

export default function NavBar() {
  // pages
  const users = { name: "Users", route: "/users" };
  const tags = { name: "Tags", route: "/tags" };
  const upload = { name: "Upload", route: "/upload" };
  const train = { name: "Train Models", route: "/train" };
  const trainResults = { name: "Training Results", route: "/trainresults" };
  const run = { name: "Run Models", route: "/run" };
  const runResults = { name: "Run Results", route: "/runresults" };
  const file = { name: "File Explorer", route: "/file" };

  const router = useRouter();

  const [userRole, setUserRole] = useState("admin");
  const [navLinks, setNavLinks] = useState<NavLink[]>([users, tags, file]);

  const onNavClick = (route: string) => {
    router.push(route);
  };

  const onRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setUserRole(val);
    switch (val) {
      case "admin":
        setNavLinks([users, tags, file]);
        router.push("/users");
        break;
      case "provider":
        setNavLinks([upload]);
        router.push("/upload");
        break;
      case "engineer":
        setNavLinks([upload]);
        router.push("/upload");
        break;
      case "anotator":
        setNavLinks([upload]);
        router.push("/upload");
        break;
      case "researcher":
        setNavLinks([train, trainResults]);
        router.push("/train");
        break;
      case "scientist":
        setNavLinks([run, runResults]);
        router.push("/run");
        break;
      case "partner":
        setNavLinks([runResults]);
        router.push("/runresults");
        break;
    }
  };

  return (
    <nav className="shadow-2xl h-screen flex flex-col justify-between">
      <div className="flex justify-center items-center h-32">
        <Image src={"/Logo.png"} alt={""} width={150} height={150} />
      </div>
      <div className="flex flex-col justify-between items-center h-28">
        {navLinks &&
          navLinks.map((nav) => <NavLink nav={nav} onClick={onNavClick} />)}
      </div>
      <div className="flex justify-center items-center h-32">
        <select onChange={onRoleChange} value={userRole}>
          <option value="admin">Admin</option>
          <option value="provider">Data Provider</option>
          <option value="engineer">Data Engineer</option>
          <option value="anotator">Data Anotator</option>
          <option value="researcher">AI Researcher</option>
          <option value="scientist">Behavioral Scientist</option>
          <option value="partner">Industrial Partner</option>
        </select>
      </div>
    </nav>
  );
}

function NavLink(props: {
  nav: { name: string; route: string };
  onClick: Function;
}) {
  return (
    <div
      onClick={() => props.onClick(props.nav.route)}
      className="text-gray-500 text-2xl font-semibold hover:cursor-pointer"
    >
      {props.nav.name}
    </div>
  );
}
