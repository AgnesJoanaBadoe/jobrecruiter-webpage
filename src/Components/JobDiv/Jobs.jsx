import React from 'react'
// Import icons
import{BiTimeFive} from 'react-icons/bi'

// Import Images
import logo1 from '../../Assets/logo(1).png'
import logo2 from '../../Assets/logo(2).png'
import logo3 from '../../Assets/logo(3).png'
import logo4 from '../../Assets/logo(4).png'
import logo5 from '../../Assets/logo(5).png'
import logo6 from '../../Assets/logo(6).png'
import logo7 from '../../Assets/logo(7).png'
import logo8 from '../../Assets/logo(8).png'

// Using high order arrays method called Map to for all jobs
// List all jobs into and array called Data...

const Data = [
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Accra Central',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veniam!',
    company: ' Ghana Co.LTD.',
  },

  {
    id:2,
    image: logo2,
    title: 'UI Designer',
    time: '12Hrs',
    location: 'Circle, Accra',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veniam!',
    company: ' Design Centre',
  },

  {
    id:3,
    image: logo3,
    title: 'Customer Service',
    time: '72Hrs',
    location: 'Abeka, Accra',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veniam!',
    company: ' Huawei Customer Centre',
  },

  {
    id:4,
    image: logo4,
    title: 'Administrative Assistant',
    time: 'Now',
    location: 'Tema',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veniam!',
    company: ' Tema Port',
  },

  {
    id:5,
    image: logo5,
    title: 'Digital Marketer',
    time: '120Hrs',
    location: 'Ridge, Accra',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veniam!',
    company: 'Infinity Centre',
  },

  {
    id:6,
    image: logo6,
    title: 'Sales Agent',
    time: 'Now',
    location: 'Airport Hills, Accra',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veniam!',
    company: ' Tabitha Housings',
  },

  {
    id:7,
    image: logo7,
    title: 'Graphic Designer',
    time: '8Hrs',
    location: 'Kumawu, Kumasi',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veniam!',
    company: ' Design Center',
  },

  {
    id:8,
    image: logo8,
    title: 'Accountant',
    time: '12Hrs',
    location: 'Komenda, Cape Coast',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veniam!',
    company: ' Komenda Sugar Factory',
  }

]

// Map arr to company



const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center
      py-10" >
        {/* <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded
        [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor 
            group-hover:text-white'>Web Developer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>Now
            </span>
          </span>
          <h6 className='text-[#ccc]'>Accra</h6>

          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
          group-hover:text-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veniam!
          </p>

          <div className='company flex items-center gap-2 '>
            <img src={logo1} alt='Company Logo' className='w-[10%]' />
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>
              Ghana Co. LTD.</span>
          </div>

          <button className='border-[2px] rounded-[10px] block p-[10px] w-full 
          text-[14px] font-semibold text-textColor hover:bg-white 
          group-hover/item:text-textColor group-hover:text-white'>
            Apply Now
          </button>

        </div> */}

        {
          Data.map(({id,image,title,time,location,desc,company}) =>{
            return (
              // This returns a single job post based on the ID
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded
              [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor 
            group-hover:text-white'>{title}</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>{time}
            </span>
          </span>
          <h6 className='text-[#ccc]'>{location}</h6>

          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
          group-hover:text-white'>
            {desc}
          </p>

          <div className='company flex items-center gap-2 '>
            <img src={image} alt='Company Logo' className='w-[10%]' />
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>
              {company}</span>
          </div>

          {/* This is the button */}
          <button className='border-[2px] rounded-[10px] block p-[10px] w-full 
          text-[14px] font-semibold text-textColor hover:bg-white 
          group-hover/item:text-textColor group-hover:text-white'>
            Apply Now
          </button>

        </div> 
            )
          })
        }

      </div>
    </div>
  )
}

export default Jobs
