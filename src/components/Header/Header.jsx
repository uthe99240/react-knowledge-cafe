import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 border-b-2 mb-6'>
            <h1 className="text-2xl font-bold m-0 p-0">Knowledge Cafe</h1>
            <img src={profile} alt=""  />
        </header>
    );
};

export default Header;