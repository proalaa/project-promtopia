import PromptCard from "@components/PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const PromptCardList = ({ data, handleEdit, handleDelete }) => {
    return (
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    );
  };

  return (
    <section className={"w-full"}>
      <h1 className={"head_text text-left"}>
        {name} <span className={"blue_gradient"}>Profile</span>
      </h1>
      <p className={"desc text-left"}>{desc}</p>

      <PromptCardList
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        data={data}
      />
    </section>
  );
};

export default Profile;
