import AppLogo from "../AppLogo/AppLogo";
import Button from "../Button/Button";

const Footer = () => {
    const socialLinks = ['linkedin-in', 'twitter', 'facebook-f', 'instagram'];

    return (
        <footer className="flex flex-col bg-[#051A45] text-white py-5 gap-6 px-6">
            <section className="flex flex-col md:flex-row text-center md:text-start items-center md:items-start md:justify-between gap-6 md:gap-4 w-[92%] mx-auto my-7 flex-wrap">
                <AppLogo
                    tw_classes={['text-white', 'text-xl', 'pb-2']}
                    colored={false}
                />
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 flex-wrap">
                    <div className="mr-8">
                        <h4 className="text-2xl">Company</h4>
                        <ul className="text-[#E9F7FE] font-light">
                            <li className="leading-8"><a href="blog">Blog</a></li>
                            <li className="leading-8"><a href="about-us">About Us</a></li>
                            <li className="leading-8"><a href="contact-us">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-2xl">Newsletter</h4>
                        <p className="text-[#8C97AC]">
                            Subscribe to our newsletter to receive weekly<br />
                            updates about the best resume guide
                        </p>
                        <form className="flex">
                            <div className="flex gap-3 rounded-l-md py-2 px-3 text-[#8C97AC] items-center bg-white">
                                <i className="fa-regular fa-envelope"></i>
                                <input type="email" placeholder="Enter your email" className="outline-none w-full" />
                            </div>
                            <Button
                                addons={{
                                    'border-top-left-radius': '0px',
                                    'border-bottom-left-radius': '0px',
                                }}
                            >Subscribe</Button>
                        </form>
                    </div>
                </div>
            </section>
            <div className="flex flex-col md:flex-row gap-2 text-center items-center justify-between w-[92%] mx-auto pt-3 border-[#313D55] border-t border-solid">
                <span className="text-[#8C97AC]">© Revampinsights.All Right Reserved | support@revampinsights.com</span>
                <div className="flex items-center gap-2">
                    {socialLinks.map(sl =>
                        <span
                            className="text-white bg-[#d9d9d949] flex items-center justify-center w-8 h-8 p-4 rounded-full border border-solid border-[#FCFCFC]"
                            key={`social-link-${sl}`}
                        >
                            <i className={`fa-brands fa-${sl}`}></i>
                        </span>
                    )}
                </div>
            </div>
        </footer>
    );
}

export default Footer;