function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 md:p-8 sm:p4 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        <img className="rounded-full sm:w-24 h-24 md:w-36 h-36 mx-auto" src="https://via.placeholder.com/150" alt="User"/>
        <h1 className="sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
        <p className="sm:text-sm md:text-base text-gray-600">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;