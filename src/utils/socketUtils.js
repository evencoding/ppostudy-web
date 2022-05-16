function AddMessages({ msg }) {
  return (
    <>
      <div>
        {msg.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </div>
    </>
  );
}

export default AddMessages;
