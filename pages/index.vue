<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";
import { TASK_COLORS } from "~/constants/task";

type PriorityTask = {
  id: number;
  title: string;
  period: number;
  progress: number;
};

type DailyTask = {
  id: number;
  title: string;
  finished: boolean;
};

definePageMeta({
  layout: "main",
});

const priorityTasks = ref<PriorityTask[]>([
  {
    id: 1,
    title: "UI Design",
    period: 10,
    progress: 80,
  },
  {
    id: 2,
    title: "NuxtJS Task",
    period: 18,
    progress: 30,
  },
  {
    id: 3,
    title: "Edit a Picture",
    period: 25,
    progress: 20,
  },
  {
    id: 4,
    title: "Writing Book",
    period: 35,
    progress: 10,
  },
]);

const dailyTasks = ref<DailyTask[]>([
  {
    id: 1,
    title: "Work out",
    finished: true,
  },
  {
    id: 2,
    title: "Daily meeting",
    finished: true,
  },
  {
    id: 3,
    title: "Reading a book",
    finished: false,
  },
  {
    id: 4,
    title: "Daily meeting",
    finished: false,
  },
]);

const toggleTask = (task: DailyTask) => {
  task.finished = !task.finished;
};
</script>

<template>
  <div :class="$style.container">
    <div>
      <div :class="$style.greeting">
        <p :class="$style['greeting-title']">Welcome Phillip</p>
        <HyperLink :to="ROUTES.NOTIFICATIONS">
          <Icon name="solar:bell-bold" size="24" />
        </HyperLink>
      </div>
      <p>Have a nice day!</p>
    </div>
    <div>
      <h2 :class="$style.title">My Priority Task</h2>
      <div :class="$style['priority-list']">
        <PriorityTask
          v-for="(task, index) in priorityTasks"
          :key="task.id"
          :id="task.id"
          :title="task.title"
          :period="task.period"
          :progress="task.progress"
          :color="TASK_COLORS[index % TASK_COLORS.length]"
        />
      </div>
    </div>
    <div>
      <h2 :class="$style.title">Daily Task</h2>
      <DailyTask
        v-for="task in dailyTasks"
        :key="task.id"
        :title="task.title"
        :finished="task.finished"
        @change="toggleTask(task)"
      />
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
}

.greeting {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.greeting-title {
  font-size: var(--fs-display-xs);
  font-weight: var(--fw-bold);
  line-height: var(--lh-text-lg);
}

.title {
  font-size: var(--fs-text-lg);
  font-weight: var(--fw-semibold);
  margin-bottom: 0.625rem;
}

.priority-list {
  display: flex;
  align-items: stretch;
  gap: 0.75rem;
  width: 100%;
  overflow-x: auto;
}
</style>
