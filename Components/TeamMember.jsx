  // TeamMember component definition
  const TeamMember = ({ name, role, image }) => {
    return (
      <div className="team-member">
        <img src={require(`../assets/images/team/${image}`).default} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    );
  };
  export default TeamMember;