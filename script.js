document.addEventListener('DOMContentLoaded', () => {
    // --- Данные (в реальном приложении это будет загружаться с сервера/API) ---
    const tournamentsData = [
        {
            id: 1,
            name: "IEM Katowice 2025",
            date: "10 Февраля - 16 Февраля",
            prizePool: 1000000,
            location: "Катовице, Польша",
            status: "Предстоящий",
            description: "Один из самых престижных турниров в календаре CS2, привлекающий лучшие команды со всего мира. Известен своей невероятной атмосферой и высоким уровнем конкуренции.",
            teamsParticipating: 24,
            format: "Групповая стадия (двойное устранение) + Плей-офф (одиночное устранение)"
        },
        {
            id: 2,
            name: "ESL Pro League Season 21",
            date: "1 Марта - 7 Марта",
            prizePool: 750000,
            location: "Мальта",
            status: "Предстоящий",
            description: "Долгосрочная лига, объединяющая элитные команды для борьбы за чемпионский титул и путевки на другие крупные турниры. Сезон 21 обещает быть захватывающим.",
            teamsParticipating: 32,
            format: "Лиговая система + Плей-офф"
        },
        {
            id: 3,
            name: "PGL Major Copenhagen 2024",
            date: "25 Марта - 31 Марта",
            prizePool: 1250000,
            location: "Копенгаген, Дания",
            status: "Завершен",
            description: "Первый Major по CS2, ознаменовавший новую эру в истории игры. Завершился триумфом Team Spirit, показавшей невероятную игру на протяжении всего турнира.",
            teamsParticipating: 24,
            format: "Швейцарская система + Плей-офф"
        },
        {
            id: 4,
            name: "BLAST Premier Spring Final 2024",
            date: "12 Июня - 16 Июня",
            prizePool: 425000,
            location: "Лондон, Великобритания",
            status: "Предстоящий",
            description: "Финальная часть весеннего сезона BLAST Premier, где лучшие команды соревнуются за титул чемпиона и путевку на BLAST Premier World Final.",
            teamsParticipating: 8,
            format: "Одиночное устранение"
        },
        {
            id: 5,
            name: "Intel Grand Slam V",
            date: "2024-2025",
            prizePool: 1000000,
            location: "Мировой",
            status: "В процессе",
            description: "Специальный вызов для команд, выигравших четыре престижных турнира ESL/DreamHack Masters в течение 10 турниров. Обладатель Grand Slam получает бонусный миллион долларов.",
            teamsParticipating: "Разные", // Это бонус, не турнир
            format: "Накопительный"
        },
        {
            id: 6,
            name: "Thunderpick World Championship 2024",
            date: "23 Октября - 3 Ноября",
            prizePool: 1000000,
            location: "Онлайн / Студия",
            status: "Предстоящий",
            description: "Онлайн-турнир с крупным призовым фондом, который привлекает внимание многих сильных команд. Завершается LAN-финалами.",
            teamsParticipating: 16,
            format: "Онлайн-группы + LAN-плей-офф"
        },
        {
            id: 7,
            name: "Gamers8 2024",
            date: "Август",
            prizePool: 1000000,
            location: "Рияд, Саудовская Аравия",
            status: "Предстоящий",
            description: "Ежегодный фестиваль киберспорта в Саудовской Аравии с огромными призовыми фондами по различным дисциплинам, включая CS2.",
            teamsParticipating: 8,
            format: "Одиночное устранение"
        },
        {
            id: 8,
            name: "IEM Chengdu 2024",
            date: "8 Апреля - 14 Апреля",
            prizePool: 250000,
            location: "Чэнду, Китай",
            status: "Завершен",
            description: "Крупный турнир серии IEM, который собрал лучшие команды Азии и мира. Завершился победой FaZe Clan.",
            teamsParticipating: 16,
            format: "Группы + Плей-офф"
        },
        {
            id: 9,
            name: "CCT Global Finals 2024",
            date: "16 Мая - 26 Мая",
            prizePool: 500000,
            location: "LAN, не определено",
            status: "Предстоящий",
            description: "Финалы серии CCT, где команды со всего мира будут бороться за крупный приз и звание чемпиона.",
            teamsParticipating: 16,
            format: "Группы + Плей-офф"
        },
        {
            id: 10,
            name: "BetBoom Dacha 2024",
            date: "11 Мая - 15 Мая",
            prizePool: 300000,
            location: "Белград, Сербия",
            status: "Завершен",
            description: "Небольшой, но престижный турнир от BetBoom, привлекающий топ-команды СНГ и Европы.",
            teamsParticipating: 8,
            format: "Двойное устранение"
        }
    ];

    const teamsData = [
        {
            id: 1,
            name: "Natus Vincere",
            region: "cis",
            logo: "https://ibb.co/4ZHmN1d6",
            info: "Украинская киберспортивная организация, одна из самых успешных и узнаваемых в истории Counter-Strike. Известна своей стабильностью и множеством трофеев.",
            roster: [
                { nickname: "s1mple", fullName: "Александр Костылев", role: "Снайпер", country: "Украина" },
                { nickname: "b1t", fullName: "Валерий Ваховский", role: "Райфлер", country: "Украина" },
                { nickname: "Aleksib", fullName: "Алекси Виролайнен", role: "Капитан", country: "Финляндия" },
                { nickname: "jL", fullName: "Юстинас Лекавичус", role: "Райфлер", country: "Литва" },
                { nickname: "iM", fullName: "Иван Михай", role: "Райфлер", country: "Румыния" }
            ],
            achievements: ["PGL Major Stockholm 2021", "IEM Katowice 2020", "ESL Pro League Season 14"]
        },
        {
            id: 2,
            name: "FaZe Clan",
            region: "europe",
            logo: "https://liquipedia.net/commons/images/4/41/FaZe_Clan_2023.png",
            info: "Международная киберспортивная организация, обладающая одним из самых звездных составов в CS2. Известны своей агрессивной игрой и способностью к камбэкам.",
            roster: [
                { nickname: "karrigan", fullName: "Финн Андерсен", role: "Капитан", country: "Дания" },
                { nickname: "rain", fullName: "Ховард Нюгаард", role: "Райфлер", country: "Норвегия" },
                { nickname: "broky", fullName: "Хельвийс Сауканц", role: "Снайпер", country: "Латвия" },
                { nickname: "Twistzz", fullName: "Рассел Ван Далкен", role: "Райфлер", country: "Канада" },
                { nickname: "ropz", fullName: "Робин Коль", role: "Райфлер", country: "Эстония" }
            ],
            achievements: ["PGL Major Antwerp 2022", "IEM Katowice 2022", "ESL Pro League Season 15"]
        },
        {
            id: 3,
            name: "Team Vitality",
            region: "europe",
            logo: "https://liquipedia.net/commons/images/8/87/Team_Vitality_2023.png",
            info: "Французская киберспортивная организация, базирующаяся на феноменальном игроке ZywOo. Они постоянно находятся в топе мирового рейтинга.",
            roster: [
                { nickname: "ZywOo", fullName: "Матье Эрбо", role: "Снайпер", country: "Франция" },
                { nickname: "apEX", fullName: "Дан Мидескаль", role: "Капитан", country: "Франция" },
                { nickname: "Spinx", fullName: "Лотан Гилади", role: "Райфлер", country: "Израиль" },
                { nickname: "flameZ", fullName: "Шахар Шушан", role: "Райфлер", country: "Израиль" },
                { nickname: "mezii", fullName: "Уильям Мерриман", role: "Райфлер", country: "Великобритания" }
            ],
            achievements: ["BLAST.tv Paris Major 2023", "IEM Rio 2023", "Gamers8 2023"]
        },
        {
            id: 4,
            name: "Cloud9",
            region: "north-america",
            logo: "https://liquipedia.net/commons/images/d/d7/Cloud9_2023.png",
            info: "Известная американская организация с сильным составом, объединяющим талантливых игроков из разных регионов. Они стремятся к мировому господству.",
            roster: [
                { nickname: "Boombl4", fullName: "Кирилл Михайлов", role: "Капитан", country: "Россия" },
                { nickname: "Ax1Le", fullName: "Сергей Рыхторов", role: "Райфлер", country: "Россия" },
                { nickname: "sh1ro", fullName: "Дмитрий Соколов", role: "Снайпер", country: "Россия" },
                { nickname: "HObbit", fullName: "Абай Хасенов", role: "Райфлер", country: "Казахстан" },
                { nickname: "electroNic", fullName: "Денис Шарипов", role: "Райфлер", country: "Россия" }
            ],
            achievements: ["IEM Dallas 2022", "ESL Pro League Season 13"]
        },
        {
            id: 5,
            name: "G2 Esports",
            region: "europe",
            logo: "https://liquipedia.net/commons/images/a/ae/G2_Esports_2023.png",
            info: "Европейская организация, известная своими яркими личностями и агрессивным стилем игры. Всегда являются претендентами на победу в любом турнире.",
            roster: [
                { nickname: "m0NESY", fullName: "Илья Осипов", role: "Снайпер", country: "Россия" },
                { nickname: "NiKo", fullName: "Никола Ковач", role: "Райфлер", country: "Босния и Герцеговина" },
                { nickname: "huNter-", fullName: "Неманья Ковач", role: "Райфлер", country: "Босния и Герцеговина" },
                { nickname: "jks", fullName: "Джастин Сэвэйдж", role: "Райфлер", country: "Австралия" },
                { nickname: "HooXi", fullName: "Расмус Нильсен", role: "Капитан", country: "Дания" }
            ],
            achievements: ["IEM Katowice 2023", "BLAST Premier World Final 2022"]
        },
        {
            id: 6,
            name: "ENCE",
            region: "europe",
            logo: "https://liquipedia.net/commons/images/7/7b/ENCE_2023.png",
            info: "Финская организация, часто удивляющая своей стабильностью и способностью побеждать фаворитов.",
            roster: [
                { nickname: "glaVee", fullName: "Марко Руссанен", role: "Капитан", country: "Финляндия" },
                { nickname: "NertZ", fullName: "Гай Ильюз", role: "Райфлер", country: "Израиль" },
                { nickname: "Goofy", fullName: "Лукас Хайгнер", role: "Райфлер", country: "Германия" },
                { nickname: "hades", fullName: "Александр Мискевич", role: "Снайпер", country: "Польша" },
                { nickname: "Kylar", fullName: "Кшиштоф Мелянек", role: "Райфлер", country: "Польша" }
            ],
            achievements: ["IEM Dallas 2023", "ESL Challenger Katowice 2023"]
        },
        {
            id: 7,
            name: "MOUZ",
            region: "europe",
            logo: "https://liquipedia.net/commons/images/c/c5/MOUZ_2023.png",
            info: "Молодая и перспективная европейская команда, известная своим агрессивным стилем и быстро растущими талантами.",
            roster: [
                { nickname: "siuhy", fullName: "Камиль Шкарадек", role: "Капитан", country: "Польша" },
                { nickname: "torzsi", fullName: "Адам Торсаш", role: "Снайпер", country: "Венгрия" },
                { nickname: "Jimpphat", fullName: "Джимми Салми", role: "Райфлер", country: "Финляндия" },
                { nickname: "xertioN", fullName: "Дориан Бергман", role: "Райфлер", country: "Израиль" },
                { nickname: "Brollan", fullName: "Людвиг Бролин", role: "Райфлер", country: "Швеция" }
            ],
            achievements: ["ESL Pro League Season 18", "BetBoom Dacha 2023"]
        },
        {
            id: 8,
            name: "Virtus.pro",
            region: "cis",
            logo: "https://liquipedia.net/commons/images/d/d3/Virtus.pro_2024.png",
            info: "Одна из старейших и самых титулованных организаций в СНГ, всегда способная преподнести сюрприз на крупных турнирах.",
            roster: [
                { nickname: "Jame", fullName: "Джамал Али", role: "Капитан / Снайпер", country: "Россия" },
                { nickname: "FL1T", fullName: "Евгений Лебедев", role: "Райфлер", country: "Россия" },
                { nickname: "mir", fullName: "Мир Батыров", role: "Райфлер", country: "Россия" },
                { nickname: "n0rb3r7", fullName: "Давид Даниелян", role: "Райфлер", country: "Россия" },
                { nickname: "Fame", fullName: "Петр Болышев", role: "Райфлер", country: "Россия" }
            ],
            achievements: ["ESL Challenger Atlanta 2023", "Roobet Cup 2022"]
        },
        {
            id: 9,
            name: "FURIA Esports",
            region: "south-america",
            logo: "https://liquipedia.net/commons/images/a/ae/FURIA_Esports_2023.png",
            info: "Бразильская команда, известная своим агрессивным и непредсказуемым стилем игры, который может поставить в тупик любого противника.",
            roster: [
                { nickname: "arT", fullName: "Андрей Пиовезан", role: "Капитан", country: "Бразилия" },
                { nickname: "yuurih", fullName: "Юрий Сантос", role: "Райфлер", country: "Бразилия" },
                { nickname: "KSCERATO", fullName: "Кайке Серато", role: "Райфлер", country: "Бразилия" },
                { nickname: "chelo", fullName: "Марсело Сезарес", role: "Райфлер", country: "Бразилия" },
                { nickname: "FalleN", fullName: "Габриэль Толедо", role: "Снайпер", country: "Бразилия" }
            ],
            achievements: ["Elisa Masters Espoo 2022", "ESL Pro League Season 12: North America"]
        },
        {
            id: 10,
            name: "Heroic",
            region: "europe",
            logo: "https://liquipedia.net/commons/images/4/42/Heroic_2023.png",
            info: "Датская организация, известная своей строгой дисциплиной и командной работой. Всегда показывают стабильные результаты.",
            roster: [
                { nickname: "cadiaN", fullName: "Каспер Мёллер", role: "Капитан / Снайпер", country: "Дания" },
                { nickname: "TeSeS", fullName: "Рене Мадсен", role: "Райфлер", country: "Дания" },
                { nickname: "sjuush", fullName: "Мартин Дал", role: "Райфлер", country: "Дания" },
                { nickname: "Niko", fullName: "Никола Каваллини", role: "Райфлер", country: "Италия" },
                { nickname: "kyxsan", fullName: "Кристофер Нгуен", role: "Райфлер", country: "Норвегия" }
            ],
            achievements: ["BLAST Premier Spring Final 2022", "PGL Major Stockholm 2021 (2nd place)"]
        },
        {
            id: 11,
            name: "Team Liquid",
            region: "north-america",
            logo: "https://liquipedia.net/commons/images/f/f6/Team_Liquid_2023.png",
            info: "Одна из самых узнаваемых организаций в Северной Америке, стремящаяся вернуть себе былую славу в CS2.",
            roster: [
                { nickname: "NAF", fullName: "Кит Маркович", role: "Райфлер", country: "Канада" },
                { nickname: "YEKINDAR", fullName: "Марек Галинскис", role: "Райфлер", country: "Латвия" },
                { nickname: "skullz", fullName: "Фелипе Медейрос", role: "Райфлер", country: "Бразилия" },
                { nickname: "Twistzz", fullName: "Рассел Ван Далкен", role: "Райфлер", country: "Канада" },
                { nickname: "cadiaN", fullName: "Каспер Мёллер", role: "Капитан / Снайпер", country: "Дания" }
            ],
            achievements: ["Intel Grand Slam Season 2", "ESL Pro League Season 9"]
        },
        {
            id: 12,
            name: "OG",
            region: "europe",
            logo: "https://liquipedia.net/commons/images/c/c9/OG_2023.png",
            info: "Европейская мультигейминговая организация, известная своими достижениями в Dota 2 и стремлением к успеху в CS2.",
            roster: [
                { nickname: "F1KU", fullName: "Мацей Микулас", role: "Райфлер", country: "Польша" },
                { nickname: "k1to", fullName: "Йоханнс Вурц", role: "Райфлер", country: "Германия" },
                { nickname: "regali", fullName: "Юлиан Николич", role: "Снайпер", country: "Румыния" },
                { nickname: "FASHR", fullName: "Мохаммед Фазри", role: "Райфлер", country: "Дания" },
                { nickname: "HeavyGod", fullName: "Шай Илан", role: "Райфлер", country: "Израиль" }
            ],
            achievements: ["CS_Summit 6 Europe", "Flashpoint 2 (2nd place)"]
        }
    ];

    // --- Элементы DOM турниров ---
    const tournamentList = document.querySelector('.tournament-list');
    const tournamentSearchInput = document.getElementById('tournament-search');
    const tournamentStatusFilter = document.getElementById('tournament-status-filter');
    const minPrizePoolInput = document.getElementById('min-prize-pool');
    const clearTournamentFiltersButton = document.getElementById('clear-tournament-filters');

    // НОВОЕ: Элементы DOM модального окна турниров
    const tournamentModal = document.getElementById('tournament-modal');
    const closeTournamentModalButton = document.getElementById('close-tournament-modal');
    const modalTournamentName = document.getElementById('modal-tournament-name');
    const modalTournamentDescription = document.getElementById('modal-tournament-description');
    const modalTournamentDate = document.getElementById('modal-tournament-date');
    const modalTournamentPrizePool = document.getElementById('modal-tournament-prize-pool');
    const modalTournamentLocation = document.getElementById('modal-tournament-location');
    const modalTournamentStatus = document.getElementById('modal-tournament-status');
    const modalTournamentDetails = document.getElementById('modal-tournament-details');

    // --- Элементы DOM команд ---
    const teamGrid = document.querySelector('.team-grid');
    const teamSearchInput = document.getElementById('team-search');
    const teamRegionFilter = document.getElementById('team-region-filter');
    const clearTeamFiltersButton = document.getElementById('clear-team-filters');
    const teamModal = document.getElementById('team-modal');
    const closeTeamModalButton = teamModal.querySelector('.close-button'); // Используем querySelector для кнопки закрытия команды
    const modalTeamLogo = document.getElementById('modal-team-logo');
    const modalTeamName = document.getElementById('modal-team-name');
    const modalTeamInfo = document.getElementById('modal-team-info');
    const modalTeamRegion = document.getElementById('modal-team-region');
    const modalTeamRoster = document.getElementById('modal-team-roster');
    const modalTeamAchievements = document.getElementById('modal-team-achievements');

    // --- Функции рендеринга ---

    function renderTournaments(filteredTournaments) {
        tournamentList.innerHTML = ''; // Очищаем список
        const tournamentsToRender = filteredTournaments || tournamentsData;

        if (tournamentsToRender.length === 0) {
            tournamentList.innerHTML = '<p style="text-align: center; font-size: 1.2em; color: #aaa;">Турниры по вашему запросу не найдены.</p>';
            return;
        }

        tournamentsToRender.forEach(tournament => {
            const tournamentCard = document.createElement('div');
            tournamentCard.classList.add('tournament-card');
            tournamentCard.dataset.tournamentId = tournament.id; // Для идентификации при клике
            tournamentCard.innerHTML = `
                <h3>${tournament.name}</h3>
                <div class="tournament-info">
                    <p><i class="fas fa-calendar-alt"></i> <strong>Даты:</strong> ${tournament.date}</p>
                    <p><i class="fas fa-dollar-sign"></i> <strong>Призовой фонд:</strong> $${tournament.prizePool.toLocaleString()}</p>
                    <p><i class="fas fa-map-marker-alt"></i> <strong>Место:</strong> ${tournament.location}</p>
                    <p><i class="fas fa-info-circle"></i> <strong>Статус:</strong> <span style="color: ${tournament.status === 'Предстоящий' ? '#28a745' : tournament.status === 'Завершен' ? '#dc3545' : '#ffc107'}; font-weight: bold;">${tournament.status}</span></p>
                    <p>${tournament.description}</p>
                </div>
            `;
            tournamentList.appendChild(tournamentCard);

            // Добавляем обработчик события для каждой карточки турнира
            tournamentCard.addEventListener('click', () => showTournamentModal(tournament));
        });
    }

    function renderTeams(filteredTeams) {
        teamGrid.innerHTML = ''; // Очищаем сетку
        const teamsToRender = filteredTeams || teamsData;

        if (teamsToRender.length === 0) {
            teamGrid.innerHTML = '<p style="text-align: center; font-size: 1.2em; color: #aaa;">Команды по вашему запросу не найдены.</p>';
            return;
        }

        teamsToRender.forEach(team => {
            const teamCard = document.createElement('div');
            teamCard.classList.add('team-card');
            teamCard.dataset.teamId = team.id;
            teamCard.innerHTML = `
                <img src="${team.logo}" alt="${team.name} Logo">
                <h3>${team.name}</h3>
                <p>Регион: ${team.region.charAt(0).toUpperCase() + team.region.slice(1).replace('-', ' ')}</p>
            `;
            teamGrid.appendChild(teamCard);

            teamCard.addEventListener('click', () => showTeamModal(team));
        });
    }

    // НОВОЕ: Функция для отображения модального окна турнира
    function showTournamentModal(tournament) {
        modalTournamentName.textContent = tournament.name;
        modalTournamentDescription.textContent = tournament.description;
        modalTournamentDate.textContent = tournament.date;
        modalTournamentPrizePool.textContent = `$${tournament.prizePool.toLocaleString()}`;
        modalTournamentLocation.textContent = tournament.location;
        modalTournamentStatus.textContent = tournament.status;
        modalTournamentStatus.style.color = tournament.status === 'Предстоящий' ? '#28a745' : tournament.status === 'Завершен' ? '#dc3545' : '#ffc107';

        modalTournamentDetails.innerHTML = '';
        if (tournament.teamsParticipating) {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-users"></i> Количество участников: ${tournament.teamsParticipating}`;
            modalTournamentDetails.appendChild(li);
        }
        if (tournament.format) {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-list-ol"></i> Формат: ${tournament.format}`;
            modalTournamentDetails.appendChild(li);
        }
        // Добавьте больше деталей по мере необходимости
        if (modalTournamentDetails.innerHTML === '') {
            modalTournamentDetails.innerHTML = '<li><i class="fas fa-info-circle"></i> Дополнительная информация отсутствует.</li>';
        }


        tournamentModal.style.display = 'flex';
        setTimeout(() => {
            tournamentModal.classList.add('show');
        }, 10);
    }

    // НОВОЕ: Функция для скрытия модального окна турнира
    function hideTournamentModal() {
        tournamentModal.classList.remove('show');
        setTimeout(() => {
            tournamentModal.style.display = 'none';
        }, 300);
    }

    function showTeamModal(team) {
        modalTeamLogo.src = team.logo;
        modalTeamLogo.alt = `${team.name} Logo`;
        modalTeamName.textContent = team.name;
        modalTeamInfo.textContent = team.info;
        modalTeamRegion.textContent = team.region.charAt(0).toUpperCase() + team.region.slice(1).replace('-', ' ');

        modalTeamRoster.innerHTML = '';
        if (team.roster && team.roster.length > 0) {
            team.roster.forEach(player => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <i class="fas fa-user"></i> <strong>${player.nickname}</strong> (${player.fullName}) - ${player.role} (${player.country})
                `;
                modalTeamRoster.appendChild(li);
            });
        } else {
            modalTeamRoster.innerHTML = '<li><i class="fas fa-info-circle"></i> Информация о составе отсутствует.</li>';
        }

        modalTeamAchievements.innerHTML = '';
        if (team.achievements && team.achievements.length > 0) {
            team.achievements.forEach(achievement => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-trophy"></i> ${achievement}`;
                modalTeamAchievements.appendChild(li);
            });
        } else {
            modalTeamAchievements.innerHTML = '<li><i class="fas fa-info-circle"></i> Информация о достижениях отсутствует.</li>';
        }

        teamModal.style.display = 'flex';
        setTimeout(() => {
            teamModal.classList.add('show');
        }, 10);
    }

    function hideTeamModal() {
        teamModal.classList.remove('show');
        setTimeout(() => {
            teamModal.style.display = 'none';
        }, 300);
    }

    // --- Функции фильтрации турниров ---

    function filterTournaments() {
        const searchTerm = tournamentSearchInput.value.toLowerCase().trim();
        const selectedStatus = tournamentStatusFilter.value;
        const minPrizePoolValue = parseInt(minPrizePoolInput.value, 10);

        const filtered = tournamentsData.filter(tournament => {
            const matchesSearch = tournament.name.toLowerCase().includes(searchTerm) ||
                                  tournament.location.toLowerCase().includes(searchTerm);
            const matchesStatus = selectedStatus === "" || tournament.status === selectedStatus;
            const matchesPrizePool = isNaN(minPrizePoolValue) || tournament.prizePool >= minPrizePoolValue;
            return matchesSearch && matchesStatus && matchesPrizePool;
        });

        renderTournaments(filtered);
    }

    function clearTournamentFilters() {
        tournamentSearchInput.value = '';
        tournamentStatusFilter.value = '';
        minPrizePoolInput.value = '';
        filterTournaments();
    }

    // --- Функции фильтрации команд ---

    function filterTeams() {
        const searchTerm = teamSearchInput.value.toLowerCase().trim();
        const selectedRegion = teamRegionFilter.value;

        const filtered = teamsData.filter(team => {
            const matchesSearch = team.name.toLowerCase().includes(searchTerm) ||
                                  (team.roster && team.roster.some(player =>
                                      player.nickname.toLowerCase().includes(searchTerm) ||
                                      player.fullName.toLowerCase().includes(searchTerm)
                                  ));
            const matchesRegion = selectedRegion === "" || team.region === selectedRegion;
            return matchesSearch && matchesRegion;
        });

        renderTeams(filtered);
    }

    function clearTeamFilters() {
        teamSearchInput.value = '';
        teamRegionFilter.value = '';
        filterTeams();
    }

    // --- Инициализация ---
    renderTournaments();
    renderTeams();

    // --- Обработчики событий для турниров ---
    tournamentSearchInput.addEventListener('input', filterTournaments);
    tournamentStatusFilter.addEventListener('change', filterTournaments);
    minPrizePoolInput.addEventListener('input', filterTournaments);
    clearTournamentFiltersButton.addEventListener('click', clearTournamentFilters);
    closeTournamentModalButton.addEventListener('click', hideTournamentModal); // Кнопка закрытия модального окна турнира

    // Закрытие модального окна турнира при клике вне его
    tournamentModal.addEventListener('click', (e) => {
        if (e.target === tournamentModal) {
            hideTournamentModal();
        }
    });


    // --- Обработчики событий для команд ---
    teamSearchInput.addEventListener('input', filterTeams);
    teamRegionFilter.addEventListener('change', filterTeams);
    clearTeamFiltersButton.addEventListener('click', clearTeamFilters);
    closeTeamModalButton.addEventListener('click', hideTeamModal); // Кнопка закрытия модального окна команды

    // Закрытие модального окна команды при клике вне его
    teamModal.addEventListener('click', (e) => {
        if (e.target === teamModal) {
            hideTeamModal();
        }
    });

    // Закрытие любого модального окна по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (teamModal.classList.contains('show')) {
                hideTeamModal();
            }
            if (tournamentModal.classList.contains('show')) {
                hideTournamentModal();
            }
        }
    });
});