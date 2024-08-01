import Image from 'next/image';
import img1 from '/public/assets/img1.jpg'; // Ensure this path is correct

export default function Projects() {
  const ProjectItems = [
    {
      src: img1,
      title: 'Levi`s',
      description:
        'We partnered with Levi`s, an icon of American industry and culture, to reimagine levi.com for a new generation of shoppers and the digital future of retail.',
    },
    {
      src: img1,
      title: 'Jordon`s',
      description:
        'We partnered with Levi`s, an icon of American industry and culture, to reimagine levi.com for a new generation of shoppers and the digital future of retail. We partnered with Levi`s, an icon of American industry and culture, to reimagine levi.com for a new generation of shoppers and the digital future of retail.',
    },
  ];

  return (
    <div className="projects-container ">
      {ProjectItems.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-image-container">
            <Image
              src={project.src}
              alt={project.title}
              width={300} 
              height={200}
              layout="responsive"
              className="project-image object-cover"
            />
          </div>
          <div className="project-text">
            <h3 className='text-2xl font-bold my-3'>{project.title}</h3>
            <p className='text-sm font-semibold w-[500px] leading-8'>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
