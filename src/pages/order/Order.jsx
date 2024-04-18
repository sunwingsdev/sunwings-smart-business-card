import "./Order.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/info_card_logo.png";
import Footer from "../../components/shared/Footer";
import MobileBottomNav from "../../components/shared/MobileBottomNav";
import selectCard from "../../assets/images/demo/6.jpeg";
const Order = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-56" />
        </Link>
      </div>
      <section className="enter_your_information">
        <div className="container">
          <div className="your_informatin_heading">
            <h2 className="text_36">
              দয়া করে শতভাগ নিশ্চিত হয়ে অর্ডার টি কনফার্ম করুন।
            </h2>
            <p className="text_20">
              অর্ডার টি সফলভাবে প্লেস হওয়ার পর আমাদের একজন প্রতিনিধি আপনার দেওয়া
              মোবাইল নম্বর অথবা হোয়াটসঅ্যাপ এর মাধ্যেমে আপনার সাথে যোগাযোগ করবে
              ও আপনার কার্ড ডিজাইন কনফার্ম করবে
            </p>
            <div className="secured_checkout">
              <div className="single_checkout_box">
                <i className="fa-solid fa-shield-halved"></i>
                সিকিউরড চেকআউট
              </div>
              <div className="single_checkout_box">
                <i className="fa-solid fa-headset"></i>
                ২৪/৭ ফ্রি সাপোর্ট
              </div>
            </div>
          </div>

          <div className="your_information_contack">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="text_26 mb-4">আপনার তথ্য দিন</h5>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="নাম লিখুন *"
                    />
                    <label htmlFor="name">আপনার সম্পূর্ন নাম লিখুন *</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="example12"
                      aria-describedby="emailHelp"
                      placeholder="মোবাইল নাম্বার লিখুন *"
                    />
                    <label htmlFor="example12">মোবাইল নাম্বার লিখুন *</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="number-whatsapp"
                      aria-describedby="emailHelp"
                      placeholder="আপনার সচল হোয়াটসঅ্যাপ নাম্বার টি লিখুন"
                    />
                    <label htmlFor="number-whatsapp">
                      আপনার হোয়াটসঅ্যাপ নাম্বার লিখুন
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="village"
                      aria-describedby="emailHelp"
                      placeholder="বাসা নম্বর, গ্রাম/এলাকা, উপজেলা *"
                    />
                    <label htmlFor="village">
                      বাসা নম্বর, গ্রাম/এলাকা, উপজেলা *
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>Dhaka</option>
                      <option value="1">Bagerhat</option>
                      <option value="2">Bandarban</option>
                      <option value="3">Barguna</option>
                      <option value="3">Barishal</option>
                      <option value="3">Bhola</option>
                      <option value="3">Bogura</option>
                      <option value="3">Brahmanbaria</option>
                      <option value="3">Chandpur</option>
                      <option value="3">Chattogram</option>
                      <option value="3">Chuadanga</option>
                      <option value="3">Coxs Bazar</option>
                    </select>
                    <label htmlFor="floatingSelect">জেলা</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="স্পেশাল কোন দিক নির্দেশনা থাকলে এখানে লিখুন"
                      id="textarea"
                      rows="3"
                    ></textarea>
                    <label htmlFor="textarea">
                      স্পেশাল দিক নির্দেশনা থাকলে লিখুন
                    </label>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 your_order_top">
                <h5 className="text_26 mb-4">আপনার অর্ডার</h5>
                <div className="your_order_contain">
                  <div className="your_order_item">
                    <img src={selectCard} alt="selectCard" />
                    <div className="order_text">
                      <h2 className="text">প্রিমিয়াম কার্ড ডিজাইন</h2>
                      <span>৯৯৯.00 ৳</span>
                    </div>
                  </div>
                  <div className="subtotalItem mb-3">
                    <div className="subtotalContain">
                      <p>Subtotal</p>
                      <div className="order_text ">
                        <span>৯৯৯.00 ৳</span>
                        <div class="form-check mt-2">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                          <label class="form-check-label" for="flexRadioDefault1">
                            <span>ঢাকার বাহিরে: </span>
                            <span>120.00 ৳</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="subtotalContain">
                      <p>Shipping</p>
                      <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label class="form-check-label" for="flexRadioDefault2">
                          <span>ঢাকার ভিতরে:</span>
                          <span>60.00 ৳</span>
                        </label>
                      </div>
                    </div>
                    <div className="totalAmount">
                      <div className="subtotalContain mt-1">
                        <p>Total</p>
                        <span>0000000000000 ৳</span>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn3">
                    অর্ডার কনফার্ম করুন ৳ 10,344.00
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
      <MobileBottomNav />
    </div>
  );
};

export default Order;
