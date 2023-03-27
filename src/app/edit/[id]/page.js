const Page = ({ params }) => {
  return (
    <div>
      <h1>Edit Task {params.id}</h1>
      <p>This is the edit page</p>
    </div>
  );
}

export default Page;