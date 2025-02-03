type User = {
  id: number;
  username: string;
  email: string;
};

function getUser(id: number): User {
  return {
    id,
    username: `user${id}`,
    email: `user${id}@example.com`
  };
}
export default User;
export { getUser };
