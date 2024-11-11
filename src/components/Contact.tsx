import {
    faEnvelope,
    faHeadset,
    faMessage,
    faPaperPlane,
    faPhone,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
  const Contact = () => {
    return (
      <div>
        <section className="contact min-h-[90vh] w-[1400px] bg-slate-300 flex justify-around flex-wrap py-8">
          
          <div className="container max-w-[800px] w-[80%] bg-transparent rounded-2xl shadow-[rgba(0, 0, 0, 0.15)] shadow-lg filter blur-0">
          <div className="head">
            <h2 className="heading text-3xl flex justify-center items-center gap-2 font-semibold">          
              <FontAwesomeIcon icon={faHeadset} className="w-6"/>            
              Contact Me
            </h2>
          </div>
            <div className="content mt-12 ml-[5%]">
              <form className="w-[100%] px-[3rem] flex flex-col justify-center items-center">
                <div className="form-group flex flex-col justify-center">
                  <div className="field flex h-12 items-center relative">
                  <FontAwesomeIcon
                      icon={faUser}
                      className="absolute left-3 h-6 w-6 text-black" />
                    <input type="text" name="name" placeholder="Name" required className="w-[500px] h-12 pl-10 outline-none rounded-md"/>
                    
                  </div>
                  <div className="field flex h-12 items-center relative mt-4">
                  <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute left-3 h-6 w-6 text-black"
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-[500px] h-12 pl-10 outline-none rounded-md"
                    />
                    
                  </div>
                  <div className="field flex h-12 items-center relative mt-4">
                  <FontAwesomeIcon
                      icon={faPhone}
                      className="absolute left-3 h-6 w-6 text-black"
                    />
                    <input type="text" name="phone" placeholder="Phone" className="w-[500px] h-12 pl-10 outline-none rounded-md"/>
                    
                  </div>
                  <div className="message flex items-center relative mt-4 ">
                  <FontAwesomeIcon
                      icon={faMessage}
                      className="absolute left-3 h-6 w-6 text-black"
                    />
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                      className='w-[500px] h-14'
                    ></textarea>
                    
                  </div>
                </div>
                <div className="button-area">
                  <button
                    type="submit"
                    className="bg-[#2506ad] w-[200px] h-12 text-white text-xl rounded-md shadow-blue-600 shadow-md tranistion-transform duration-300 hover:bg-[#421cecf5] flex justify-center items-center gap-2 mt-6"
                  >
                    Submit
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="w-4 h-4 text-white"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Contact;
  