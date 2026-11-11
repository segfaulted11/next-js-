import Link from "next/link";

export const metadata ={
  title : "Next | Users"
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <h1 className="text-3xl text-center my-3"> Users Page</h1>
      <div className="grid grid-cols-3 gap-2">
{users.map((user,index)=><div key={index} className="card card-dash bg-red-500">
  <div className="card-body">
    <h2 className="card-title">{user.name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <Link href={`/users/${index+1}`} className="btn btn-primary">VIEW DETAILS</Link>
    </div>
  </div>
</div>)}
      </div>
    </div>
  );
};

export default UsersPage;
