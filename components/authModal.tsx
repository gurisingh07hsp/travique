// "use client";
// import { useState } from "react";
// import axios from "axios";

// export default function AuthModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async () => {
//     try {
//       const url = isLogin
//         ? "/api/auth/login"
//         : "/api/auth/signup";

//       const res = await axios.post(url, form);

//       if (isLogin) {
//         localStorage.setItem("token", res.data.token);
//         alert("Login successful");
//       } else {
//         alert("Signup successful");
//         setIsLogin(true);
//       }
//     } catch (err: any) {
//       alert(err.response?.data?.message);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-xl w-80 z-999">
//         <h2 className="text-xl font-bold mb-4">
//           {isLogin ? "Login" : "Signup"}
//         </h2>

//         {!isLogin && (
//           <input
//             placeholder="Name"
//             className="w-full mb-2 p-2 border"
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//           />
//         )}

//         <input
//           placeholder="Email"
//           className="w-full mb-2 p-2 border"
//           onChange={(e) =>
//             setForm({ ...form, email: e.target.value })
//           }
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-2 p-2 border"
//           onChange={(e) =>
//             setForm({ ...form, password: e.target.value })
//           }
//         />

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-500 text-white py-2 rounded"
//         >
//           {isLogin ? "Login" : "Signup"}
//         </button>

//         <p
//           className="text-sm mt-3 cursor-pointer text-blue-500"
//           onClick={() => setIsLogin(!isLogin)}
//         >
//           {isLogin
//             ? "Create account"
//             : "Already have an account?"}
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { useUser } from "@/context/UserContext";

export default function AuthModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const {setUser} = useUser();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const url = isLogin ? "/api/auth/login" : "/api/auth/signup";
      const res = await axios.post(url, form);

      if(res.status === 200){
        if (isLogin) {
        setUser(res.data.user);
        setIsLogin(true);
        setForm({ name: "", email: "", password: "" });
        setError("");
        setIsOpen(false);
      } else {
        alert("Signup successful");
        setIsLogin(true);
        setForm({ name: "", email: "", password: "" });
        setError("");
        setIsOpen(false);
      }
      }


    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (mode: boolean) => {
    setIsLogin(mode);
    setError("");
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl w-85 shadow-xl overflow-hidden border border-yellow-100">

        {/* Top accent bar */}
        <div className="h-1 w-full bg-main" />

        <div className="p-7">
          {/* Icon */}
          <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#FF7528" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <button className="cursor-pointer" onClick={()=> setIsOpen(false)}>
            <X/>
          </button>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-[#ff7328b6] rounded-xl p-1 mb-6">
            <button
              onClick={() => switchMode(true)}
              className={`flex-1 py-2 text-sm rounded-lg transition-all duration-200 font-medium
                ${isLogin
                  ? "bg-white shadow-sm border border-yellow-100"
                  : "text-white"
                }`}
            >
              Login
            </button>
            <button
              onClick={() => switchMode(false)}
              className={`flex-1 py-2 text-sm rounded-lg transition-all duration-200 font-medium
                ${!isLogin
                  ? "bg-white text-gray-800 shadow-sm border border-yellow-100"
                  : "text-white"
                }`}
            >
              Sign up
            </button>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            {!isLogin && (
              <input
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border
                  text-gray-800 text-sm placeholder:text-gray-400
                  focus:outline-none focus:ring-1 focus:ring-[#FF7528]
                  transition-all duration-200"
              />
            )}

            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border
                text-gray-800 text-sm placeholder:text-gray-400
                focus:outline-none focus:ring-1 focus:ring-[#FF7528]
                transition-all duration-200"
            />

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border
                text-gray-800 text-sm placeholder:text-gray-400
                focus:outline-none focus:ring-1 focus:ring-[#FF7528]
                transition-all duration-200"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="mt-3 text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-5 w-full py-2.5 cursor-pointer rounded-xl bg-main hover:bg-yellow-500
              text-gray-900 font-medium text-sm
              transition-all duration-200 active:scale-[0.98]
              disabled:opacity-60 disabled:cursor-not-allowed
              flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                </svg>
                {isLogin ? "Logging in..." : "Creating account..."}
              </>
            ) : (
              isLogin ? "Login" : "Create account"
            )}
          </button>

          {/* Forgot password (login only) */}
          {/* {isLogin && (
            <p className="mt-3 text-center text-xs text-yellow-600 hover:text-yellow-700 cursor-pointer transition-colors">
              Forgot your password?
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
}