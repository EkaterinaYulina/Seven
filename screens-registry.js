/* Реестр экранов Seven: единый источник статусов для вкладки «Карта» и бейджа над рамкой панели.
   Версия передачи в разработку: 3 (22.10.2026). Состав версии 3 также записан в claude/handoff-v3-snapshot.json.
   status: done (Проработан) | proto (В прототипе, проработку подтвердит дизайнер) | stub (Не проработан, в прототипе заглушка)
   changed: null или номер версии, в которой экран изменился относительно предыдущей передачи, например 4
   id совпадает с ключом экрана в прототипе: settings-<вкладка>, cc-<вкладка>, либо ключ страницы (dev-lang, display, ph-gallery…) */
window.SEVEN_SCREENS = {
  version: 3,
  date: '22.10.2026',
  note: 'Тексты на экранах черновые. Тёмная тема на панели не снималась.',
  items: [
    { id: 'desk',            group: 'Стол и меню', title: 'Стол', status: 'done', via: 'Стартовый экран' },
    { id: 'desk-edit',       group: 'Стол и меню', title: 'Режим правки стола', status: 'done', via: 'Меню → «Править экраны»' },
    { id: 'sheet',           group: 'Стол и меню', title: 'Меню виджета', status: 'done', via: 'Правка → тап по плитке' },
    { id: 'tile-form',       group: 'Стол и меню', title: 'Форма плитки', status: 'proto', via: 'Меню виджета → «Настроить»' },
    { id: 'drawer',          group: 'Стол и меню', title: 'Боковое меню', status: 'done', via: 'Свайп от левого края или ☰' },
    { id: 'apps',            group: 'Стол и меню', title: 'Все приложения', status: 'done', via: 'Меню → «Все приложения»' },
    { id: 'shade',           group: 'Стол и меню', title: 'Шторка «Панель»', status: 'proto', via: 'Меню → «Панель»' },
    { id: 'ph-gallery',      group: 'Стол и меню', title: 'Галерея «Добавить на экран»', status: 'stub', via: 'Правка → «+ Виджет»', code: 'DeskGallery' },
    { id: 'ph-move',         group: 'Стол и меню', title: 'Перенос плитки', status: 'stub', via: 'Правка → тап по плитке → «Переместить»' },
    { id: 'ph-more',         group: 'Стол и меню', title: 'Меню «⋮» панели правки', status: 'stub', via: 'Правка → «⋮»' },

    { id: 'settings-voice',    group: 'Настройки', title: 'Голос', status: 'done', via: 'Настройки → Голос' },
    { id: 'settings-device',   group: 'Настройки', title: 'Устройство', status: 'done', via: 'Настройки → Устройство' },
    { id: 'settings-conn',     group: 'Настройки', title: 'Подключение', status: 'done', via: 'Настройки → Подключение' },
    { id: 'settings-security', group: 'Настройки', title: 'Безопасность', status: 'proto', via: 'Настройки → Безопасность' },
    { id: 'settings-data',     group: 'Настройки', title: 'Данные', status: 'proto', via: 'Настройки → Данные' },
    { id: 'dev-lang',          group: 'Настройки', title: 'Язык', status: 'done', via: 'Устройство → Язык' },
    { id: 'dev-room',          group: 'Настройки', title: 'Комната панели', status: 'done', via: 'Устройство → Комната панели' },
    { id: 'wallpaper',         group: 'Настройки', title: 'Обои', status: 'proto', via: 'Устройство → Обои' },
    { id: 'display',           group: 'Настройки', title: 'Экран', status: 'done', via: 'Устройство → Экран' },
    { id: 'dev-launcher',      group: 'Настройки', title: 'Лаунчер', status: 'proto', via: 'Устройство → Лаунчер' },
    { id: 'export',            group: 'Настройки', title: 'Экспорт и импорт', status: 'proto', via: 'Данные → «Экспорт и импорт»' },
    { id: 'journal',           group: 'Настройки', title: 'Журнал команд', status: 'proto', via: 'Данные → «Журнал команд»' },

    { id: 'cc-loc',          group: 'Мой дом', title: 'Локации', status: 'done', via: 'Меню → «Мой дом»' },
    { id: 'cc-vdevs',        group: 'Мой дом', title: 'Виртуальные устройства комнаты', status: 'done', via: 'Локации → «Виртуальные устройства»' },
    { id: 'cc-vdev',         group: 'Мой дом', title: 'Редактор виртуального устройства', status: 'proto', via: 'Виртуальные устройства → «Настроить»' },
    { id: 'ph-vd-suggest',   group: 'Мой дом', title: 'Собрать из найденного', status: 'stub', via: 'Виртуальные устройства → «Собрать из найденного»', code: 'VirtualDeviceSuggest' },
    { id: 'ph-groups',       group: 'Мой дом', title: 'Группы комнат', status: 'stub', via: 'Локации → карточка комнаты → «Группы»', code: 'LocationGroups' },
    { id: 'cc-conn',         group: 'Мой дом', title: 'Подключения', status: 'done', via: 'Мой дом → Подключения' },
    { id: 'cc-integ',        group: 'Мой дом', title: 'Интеграция', status: 'done', via: 'Подключения → строка интеграции' },
    { id: 'cc-broker',       group: 'Мой дом', title: 'Брокер', status: 'proto', via: 'Подключения → строка брокера' },
    { id: 'add-systems',    group: 'Мастера', title: 'Найденные системы', status: 'proto', via: 'Подключения → «Добавить интеграцию»' },
    { id: 'cc-ha',           group: 'Мой дом', title: 'Сервер Home Assistant', status: 'proto', via: 'Подключения → сервер HA / «Добавить»' },
    { id: 'cc-dev',          group: 'Мой дом', title: 'Устройства', status: 'done', via: 'Мой дом → Устройства' },
    { id: 'cc-devedit',      group: 'Мой дом', title: 'Редактирование устройства', status: 'done', via: 'Устройства → карточка устройства' },
    { id: 'cc-wid',          group: 'Мой дом', title: 'Виджеты и сценарии', status: 'proto', via: 'Мой дом → Виджеты' },
    { id: 'cc-scen',         group: 'Мой дом', title: 'Редактор сценария', status: 'proto', via: 'Виджеты → «Добавить сценарий»' },
    { id: 'cc-pick',         group: 'Мой дом', title: 'Выбор цели шага', status: 'proto', via: 'Редактор сценария → «Добавить шаг»' },
    { id: 'ph-se-action',    group: 'Мой дом', title: 'Сценарий: действие', status: 'stub', via: 'Редактор сценария → «Далее»', code: 'SEAction' },
    { id: 'ph-se-order',     group: 'Мой дом', title: 'Сценарий: порядок', status: 'stub', via: 'После «Действие»', code: 'SEOrder' },
    { id: 'ph-se-name',      group: 'Мой дом', title: 'Сценарий: название', status: 'stub', via: 'После «Порядок»', code: 'SEName' },
    { id: 'ph-se-preview',   group: 'Мой дом', title: 'Сценарий: предпросмотр', status: 'stub', via: 'После «Название»', code: 'SEPreview' },

    { id: 'add-controller',  group: 'Мастера', title: 'Добавление оборудования: контроллер', status: 'done', via: 'Подключения → «Добавить»' },
    { id: 'add-ha',          group: 'Мастера', title: 'Добавление Home Assistant', status: 'done', via: 'Подключения → «Добавить» → Home Assistant' },
    { id: 'add-devices',     group: 'Мастера', title: 'Добавление оборудования: устройства', status: 'done', via: 'Мастер → «Далее»' },
    { id: 'ph-mqtt-tail',    group: 'Мастера', title: 'Мастер MQTT после «Адрес»', status: 'stub', via: 'Подключения → «Добавить» → «Брокер MQTT» → «Указать вручную»' },
    { id: 'w1',              group: 'Мастера', title: 'Мастер первого запуска, шаг 1', status: 'proto', via: 'Настройки → Данные → «Запустить мастер»' },
    { id: 'w2',              group: 'Мастера', title: 'Мастер первого запуска, шаг 2', status: 'proto', via: 'Шаг 1 → «Далее»' },
    { id: 'w3',              group: 'Мастера', title: 'Мастер первого запуска, шаг 3', status: 'stub', via: 'Шаг 2 → «Далее»', code: 'FRRooms' },
    { id: 'w4',              group: 'Мастера', title: 'Мастер первого запуска, шаг 4', status: 'stub', via: 'Шаг 3 → «Далее»', code: 'FRGroups' },
    { id: 'w5',              group: 'Мастера', title: 'Мастер первого запуска, шаг 5', status: 'stub', via: 'Шаг 4 → «Далее»', code: 'FRImport' },
    { id: 'w6',              group: 'Мастера', title: 'Мастер первого запуска, шаг 6', status: 'stub', via: 'Шаг 5 → «Далее»', code: 'FRSummary' }
  ]
};
