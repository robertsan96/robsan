import { ISidebarMenu } from "../interfaces/sidebar/ISidebarMenu";

export const Menu: ISidebarMenu = {
  sections: [
    {
      name: "General",
      items: [
        {
          label: "Home",
          items: [],
          isCollapsed: false,
          isActive: true,
          isEnabled: true,
        },
        {
          label: "About me",
          items: [],
          isCollapsed: false,
          isActive: false,
          isEnabled: true,
        },
        {
          label: "Blog",
          items: [],
          isCollapsed: false,
          isActive: false,
          isEnabled: true,
        },
      ],
    },
    {
      name: "Technology",
      items: [
        {
          label: "React",
          items: [
            {
              label: "Tutorials",
              items: [
                {
                  label: "Beginner",
                  items: [],
                  isCollapsed: false,
                  isActive: false,
                  isEnabled: true,
                },
                {
                  label: "Intermediate",
                  items: [],
                  isCollapsed: false,
                  isActive: false,
                  isEnabled: true,
                },
                {
                  label: "Advanced",
                  items: [],
                  isCollapsed: false,
                  isActive: false,
                  isEnabled: true,
                },
              ],

              isCollapsed: false,
              isActive: false,
              isEnabled: true,
            },
            {
              label: "Redux",
              items: [],
              isCollapsed: false,
              isActive: false,
              isEnabled: true,
            },
            {
              label: "Higher Order Components",
              items: [],
              isCollapsed: false,
              isActive: true,
              isEnabled: true,
            },
          ],

          isCollapsed: false,
          isActive: false,
          isEnabled: true,
        },
        {
          label: "JavaScript",
          items: [
            {
              label: "Functions",
              items: [],
              isCollapsed: false,
              isActive: false,
              isEnabled: true,
            },
          ],

          isCollapsed: false,
          isActive: false,
          isEnabled: true,
        },
      ],
    },
    {
      name: "Health",
      items: [
        {
          label: "Sport",
          items: [
            {
              label: "Jogging",
              items: [],
              isCollapsed: false,
              isActive: false,
              isEnabled: true,
            },
            {
              label: "Fitness",
              items: [],
              isCollapsed: false,
              isActive: false,
              isEnabled: true,
            },
          ],
          isCollapsed: true,
          isActive: false,
          isEnabled: true,
        },
        {
          label: "Nutrition",
          items: [
            {
              label: "BMI Calculator",
              items: [],
              isCollapsed: false,
              isActive: false,
              isEnabled: true,
            },
          ],

          isCollapsed: false,
          isActive: false,
          isEnabled: true,
        },
      ],
    },
  ],
};
