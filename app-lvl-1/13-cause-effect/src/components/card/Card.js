import React, { useEffect, useState } from 'react';

function Card() {
  const [data, setData] = useState([]);

  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const imagesResponse = await fetch('https://picsum.photos/v2/list');
        const imagesData = await imagesResponse.json();
        const textsResponse = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const textsData = await textsResponse.json();

        const combinedData = imagesData.slice(0, 30).map((image, index) => ({
          image: image.download_url,
          title: textsData[index]?.title || 'No title',
          body: textsData[index]?.body || 'No  body',
          id: textsData[index]?.id || 'No  id',
        }));

        setData(combinedData);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    }
    fetchData();
  }, []);

  console.log(data);

  const handleItemClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
    console.log('af');
  };

  return (
    <ul className="mt-20  flex flex-wrap-reverse justify-center ">
      {data.map((item, index) => {
        return (
          <li
            className="bg-white dark:bg-gray-800 m-4 rounded-lg shadow-2xl  md:w-1/3 lg:w-1/3  "
            onClick={() => handleItemClick(index)}
          >
            <img
              src={item.image}
              alt="Post"
              className="rounded-t-lg cursor-pointer image"
            />
            {openIndex === index && (
              <div className="wrapper dark:bg-gray-800  bg-white">
                <div className="px-4 pt-2">
                  <h1 className="font-bold mt-2 text-2xl text-gray-800 dark:text-gray-300 capitalize">
                    {item.title}
                  </h1>
                  <h3 className="text-gray-500 dark:text-gray-300 mt-2">
                    Showing dark and light mode with react and Tailwind css
                  </h3>
                  <p className="text-gray-400 dark:text-gray-400 my-4">
                    {item.body}
                  </p>
                </div>
                <div className="px-4 pb-2">
                  <a
                    href="https://github.com/Anatoli1022"
                    target="blank"
                    rel="nonreferrer"
                    className="flex items-center"
                  >
                    <div className="ml-2">
                      <p className="text-gray-500 dark:text-gray-300 text-sm">
                        @githabus
                      </p>
                    </div>
                  </a>
                </div>
                <div className="p-4">
                  <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">
                    #react
                  </span>
                  <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">
                    #Tailwind
                  </span>
                  <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">
                    #darkmode
                  </span>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Card;
