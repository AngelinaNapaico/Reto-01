const newsData = [
    {
      title: "Impacto de la Energía Renovable en la Comunidad",
      description: "En este artículo, exploramos cómo la transición hacia fuentes de energía renovable está transformando comunidades alrededor del mundo, promoviendo la sostenibilidad y el cumplimiento de los ODS.",
      link: "#"
    },
    {
      title: "Tecnologías Limpias en la Construcción de Viviendas",
      description: "Conoce las últimas innovaciones en la construcción de viviendas sostenibles que utilizan materiales ecológicos y tecnologías limpias.",
      link: "#"
    },
    {
      title: "Reforestación y su Contribución al ODS 13",
      description: "La reforestación es clave para mitigar el cambio climático y este artículo detalla proyectos exitosos que están logrando restaurar bosques y ecosistemas.",
      link: "#"
    }
  ];
  
  const newsContainer = document.getElementById('news-container');
  
  function displayNews() {
    newsData.forEach(news => {
      const newsCard = document.createElement('div');
      newsCard.classList.add('news-card');
      
      newsCard.innerHTML = `
        <h3>${news.title}</h3>
        <p>${news.description}</p>
        <a href="${news.link}">Leer más</a>
      `;
      
      newsContainer.appendChild(newsCard);
    });
  }
  
  displayNews();