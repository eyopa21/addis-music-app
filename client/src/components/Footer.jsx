const Footer = () => {
return (

<footer className="bg-white shadow p-2 w-screen mt-32">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-violet-600">Addis Music</span>
            </a>
            <ul
                className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a  className="hover:underline me-4 md:me-6 text-violet-600">About</a>
                </li>
                <li>
                    <a  className="hover:underline me-4 md:me-6 text-violet-600">Privacy Policy</a>
                </li>
                <li>
                    <a  className="hover:underline me-4 md:me-6 text-violet-600">Licensing</a>
                </li>
                <li>
                    <a  className="hover:underline text-violet-600">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
                href="https://eyoba-blog.netlify.app" className="hover:underline text-violet-600">Eyob Nigussie™ jobtennis21@gmail.com</a>.</span>
    </div>
</footer>

);
}

export default Footer;