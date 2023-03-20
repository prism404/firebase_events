// import React, { useEffect, useState } from 'react'
// // import axios from 'axios'
// import { Link } from "react-router-dom";
// import '../assets/css/fetch.css';

// // import Chip from '@mui/material/Chip';
// // import Autocomplete from '@mui/material/Autocomplete';
// // import TextField from '@mui/material/TextField';
// // import Stack from '@mui/material/Stack';
// // import { Box } from '@mui/material';

// function Home() {

//   // useEffect(() => {
//   //   axios({
//   //     method: "GET",
//   //     url: "https://public.opendatasoft.com//api/records/1.0/search/?dataset=evenements-publics-openagenda&q=&rows=100&start=10",
//   //     headers: { "content-type": "application/json" },
//   //   }).then((res) => {
//   //       console.log(res.data["records"])
//   //       setEvents(res.data["records"]);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   //   return;
//   // }, []);

//   // const prevHandler = () => {
//   //   if (currentPage !== 1 ) setCurrentPage(currentPage - 1);
//   // }

//   // const nextHandler = () => {
//   //   if (currentPage !== numOfPages ) setCurrentPage(currentPage + 1);
//   // }

//   // if (!events) return <div>Nothing to see here!</div>;

//   return (
//     <div className='fetch_container'>
//       {/* <form className='search' onSubmit={handlSearch}>
//         <input 
//           type="text" 
//           value={value} placeholder='Looking for something?...'
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button type='submit' >Search</button>
//       </form> */}
      
//       {/* <Autocomplete
//       id="country-select-demo"
//       className='search'
//       options={countries}
//       autoHighlight
      
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Choose a country"
//           inputProps={{
//             ...params.inputProps,
//             autoComplete: "new-password", // disable autocomplete and autofill
//           }}
//         />
//       )}
//     /> */}
      
//       <h2>Évènements disponibles</h2>
//       <div className='events-grid'>
//         {visibleEvent.map((data) => (
//           <div key={data.recordid} className='card'>
//             <div className='card_contents'>
//               <h3>{data.fields.title_fr}</h3>
//               <p>{data.fields.description_fr}</p>
//               <div className='card_content_footer'>
//                 <h4>{data.fields.daterange_fr}</h4>
//                 <div className='event_infos'>
//                   <div>
//                     <h4>Ville: {data.fields.location_city}</h4>
//                     <h4>Region: {data.fields.location_region}</h4>
//                     <h4>Pays : {data.fields.country_fr}</h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Link to={'event/:recordid'}>
//               <img src={data.fields.image} alt="" />
//             </Link>            
//           </div>
//         ))}
//       </div>
//       <div className='pagination'>
//         <span onClick={prevHandler}>
//           <img src="https://img.icons8.com/external-zen-filled-royyan-wijaya/24/FFFFFF/external-so-chevrons-left-arrow-zen-filled-royyan-wijaya.png" height={20}/>
//         </span>
//           {pages.map(page => 
//             <span key={page} 
//               onClick={() => setCurrentPage(page)}
//               className={`${currentPage === page ? 'active' : ''}`}
//             >
//               {`${page} `}
//           </span>)}
//         <span onClick={nextHandler}>
//         <img src="https://img.icons8.com/external-zen-filled-royyan-wijaya/24/FFFFFF/external-so-chevrons-right-arrow-zen-filled-royyan-wijaya.png" height={20}/>
//         </span>
//       </div>
      
//     </div>
//   )
// }

// export default Home