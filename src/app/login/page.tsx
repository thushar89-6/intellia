import LeftSection from "../components/LeftSection"
import Login from "../components/Login"
export default function LoginPage() {
  return (
    <div>
      <div className="mt-8 mx-48 max-sm:mx-0 max-sm:mt-0 flex max-sm:flex-col rounded-4xl bg-gradient-to-r from-[#26202c] to-[#1a2237]">     
            <div className="w-full lg:max-w-3/5 ">
                <LeftSection />
            </div>
            <div className=" min-w-2/5 max-sm:w-full">
              <Login />
              </div>
          </div>
    </div>
  )
}
