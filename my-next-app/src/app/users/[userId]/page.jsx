const UsersDetailsPage= async({params}) => {
const {userId} = await params;
const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
const user = await res.json();
console.log(user)
  return (
    <div>
      <h1 className="text-center text-3xl"> Users Details Page</h1>
      <div className="bg-red-400">
<p>name : {user.name}</p>
<p>name : {user.email}</p>
<p>name : {user.phone}</p>
      </div>
    </div>
  );
}

export default UsersDetailsPage;
