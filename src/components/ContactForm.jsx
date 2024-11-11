export default function ContactForm() {
    return (
        <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="w-full max-w-lg bg-black rounded-lg shadow-md p-6 space-y-6 mx-auto" // Center form and make responsive
        >
            <input type="hidden" name="access_key" value="06de35a4-b6b7-48cc-aa14-99069f8bf06e" />
            <input type="hidden" name="redirect" value="" />

            {/* Name Field */}
            <div className="p-1">
                <label htmlFor="name" className="text-xl font-semibold text-white block mb-2">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    required
                    placeholder="Your Full Name"
                    className="w-full p-3 border border-white bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
            </div>

            {/* Email Field */}
            <div className="p-1">
                <label htmlFor="email" className="text-xl font-semibold text-white block mb-2">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    required
                    placeholder="Your Email Address"
                    className="w-full p-3 border border-white bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
            </div>

            {/* Message Field */}
            <div className="p-1">
                <label htmlFor="message" className="text-xl font-semibold text-white block mb-2">Message</label>
                <textarea 
                    name="message" 
                    id="message" 
                    required
                    placeholder="Your Message"
                    className="w-full p-3 h-32 border border-white bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white resize-none"
                />
            </div>

            {/* Submit Button */}
            <div className="p-1">
                <button 
                    type="submit" 
                    className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-black"
                >
                    Submit Form
                </button>
            </div>
        </form>
    );
}