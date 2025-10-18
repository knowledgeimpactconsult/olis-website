// // App.jsx
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { Suspense, lazy, useState, useEffect } from "react";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";
// import PageWrapper from "./components/PageWrapper";
// import Loader from "./components/Loader"; // premium loader

// // Lazy-loaded pages
// const Home = lazy(() => import("./pages/Home"));
// const Academics = lazy(() => import("./pages/Academics"));
// const Admission = lazy(() => import("./pages/Admission"));
// const Gallery = lazy(() => import("./pages/Gallery"));
// const Events = lazy(() => import("./pages/Events"));
// const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import("./pages/Contact"));
// const StudentLife = lazy(() => import("./pages/StudentLife"));
// const Clubs = lazy(() => import("./pages/Clubs"));
// const AdmissionFormPage = lazy(() => import("./pages/AdmissionFormPage"));
// const Houses = lazy(() => import("./pages/Houses"));
// const Excursions = lazy(() => import("./pages/Excursions"));
// const SportsAndCulture = lazy(() => import("./pages/SportsAndCulture"));
// const EventDetail = lazy(() => import("./pages/EventDetail"));

// function AnimatedRoutes({ setLoading }) {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Suspense
//         fallback={
//           <Loader isVisible={true} /> // loader shown during lazy load
//         }
//       >
//         <Routes location={location} key={location.pathname}>
//           <Route
//             path="/"
//             element={
//               <PageWrapper>
//                 <Home />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/academics"
//             element={
//               <PageWrapper>
//                 <Academics />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/admission"
//             element={
//               <PageWrapper>
//                 <Admission />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/gallery"
//             element={
//               <PageWrapper>
//                 <Gallery />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/events"
//             element={
//               <PageWrapper>
//                 <Events />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <PageWrapper>
//                 <About />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/contact"
//             element={
//               <PageWrapper>
//                 <Contact />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/student-life"
//             element={
//               <PageWrapper>
//                 <StudentLife />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/clubs"
//             element={
//               <PageWrapper>
//                 <Clubs />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/admission-form"
//             element={
//               <PageWrapper>
//                 <AdmissionFormPage />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/houses"
//             element={
//               <PageWrapper>
//                 <Houses />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/excursions"
//             element={
//               <PageWrapper>
//                 <Excursions />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/sports-culture"
//             element={
//               <PageWrapper>
//                 <SportsAndCulture />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/events/:eventId"
//             element={
//               <PageWrapper>
//                 <EventDetail />
//               </PageWrapper>
//             }
//           />
//         </Routes>
//       </Suspense>
//     </AnimatePresence>
//   );
// }

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Initial splash loader (simulate delay if needed)
//     const timer = setTimeout(() => setLoading(false), 800);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       {/* Always handle scroll restoration */}
//       <ScrollToTop />
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-1">
//           {loading ? (
//             <Loader isVisible={loading} />
//           ) : (
//             <AnimatedRoutes setLoading={setLoading} />
//           )}
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";
import Loader from "./components/Loader"; // premium loader
import { ModalProvider } from "./context/ModalContext"; // ✅ Global modal provider

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Academics = lazy(() => import("./pages/Academics"));
const Admission = lazy(() => import("./pages/Admission"));
const Gallery = lazy(() => import("./pages/GalleryPage"));
const Events = lazy(() => import("./pages/Events"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const StudentLife = lazy(() => import("./pages/StudentLife"));
const Clubs = lazy(() => import("./pages/Clubs"));
const AdmissionFormPage = lazy(() => import("./pages/AdmissionFormPage"));
const Houses = lazy(() => import("./pages/Houses"));
const Excursions = lazy(() => import("./pages/Excursions"));
const SportsAndCulture = lazy(() => import("./pages/SportsAndCulture"));
const EventDetail = lazy(() => import("./pages/EventDetail"));

/**
 * AnimatedRoutes handles:
 * - Smooth transitions between pages (via AnimatePresence + PageWrapper)
 * - Loader fallback during lazy-loaded page fetch
 */
function AnimatedRoutes({ setLoading }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loader isVisible={true} />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/academics"
            element={
              <PageWrapper>
                <Academics />
              </PageWrapper>
            }
          />
          <Route
            path="/admission"
            element={
              <PageWrapper>
                <Admission />
              </PageWrapper>
            }
          />
          <Route
            path="/gallery"
            element={
              <PageWrapper>
                <Gallery />
              </PageWrapper>
            }
          />
          <Route
            path="/events"
            element={
              <PageWrapper>
                <Events />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/student-life"
            element={
              <PageWrapper>
                <StudentLife />
              </PageWrapper>
            }
          />
          <Route
            path="/clubs"
            element={
              <PageWrapper>
                <Clubs />
              </PageWrapper>
            }
          />
          <Route
            path="/admission-form"
            element={
              <PageWrapper>
                <AdmissionFormPage />
              </PageWrapper>
            }
          />
          <Route
            path="/houses"
            element={
              <PageWrapper>
                <Houses />
              </PageWrapper>
            }
          />
          <Route
            path="/excursions"
            element={
              <PageWrapper>
                <Excursions />
              </PageWrapper>
            }
          />
          <Route
            path="/sports-culture"
            element={
              <PageWrapper>
                <SportsAndCulture />
              </PageWrapper>
            }
          />
          <Route
            path="/events/:eventId"
            element={
              <PageWrapper>
                <EventDetail />
              </PageWrapper>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial splash loader
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* ✅ Always reset scroll on route change, with smooth behavior */}
      <ScrollToTop />

      <ModalProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {loading ? (
              <Loader isVisible={loading} />
            ) : (
              <AnimatedRoutes setLoading={setLoading} />
            )}
          </main>
          <Footer />
        </div>
      </ModalProvider>
    </Router>
  );
}

export default App;
