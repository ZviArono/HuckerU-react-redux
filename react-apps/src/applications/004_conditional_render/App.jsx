function MailboxGreeting({ user, unreadMessages }) {
  return (
    <div>
      <h1>Hello {user}</h1>
      {unreadMessages > 0 && (
        <div>You have {unreadMessages} unread measseges</div>
      )}
    </div>
  );
}

function UserMessageWithIf({ user }) {
  if (user) {
    return (
      <div>
        <p>Welcome {user}</p>
      </div>
    );
  } else {
    return <div>Welcome Guest</div>;
  }
}

function UserMessage({ user }) {
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome {user}</p>
          Hello {user}
        </div>
      ) : (
        <div>Welcome Guest 2</div>
      )}
    </div>
  );
}

function LoginButton({ isLoggedIn }) {
  return <button>{isLoggedIn ? "Login" : "Logout"}</button>;
}

function App() {
  return (
    <div>
      <LoginButton isLoggedIn={true} />
      <UserMessage user={"Inon"} />
      <UserMessageWithIf user={"Zvika"} />
      <MailboxGreeting user={"Keren"} unreadMessages={5} />
    </div>
  );
}

export default App;
