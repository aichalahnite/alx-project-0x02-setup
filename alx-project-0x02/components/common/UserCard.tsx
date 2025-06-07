export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="p-4 border mb-2">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{address.street}, {address.city}</p>
    </div>
  );
}
