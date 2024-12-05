<template>
  <div class="min-h-screen max-w-screen flex flex-col m-4 p-12 items-center justify-center">
    <p class="text-5xl text-center mt-6 p-6">More Than Just Frontend & Backend...</p>
    <p class="text-2xl text-center mb-12 p-6 w-1/2">
      I also have valuable experience deploying applications using a whole host of technologies &
      infrastructure.
    </p>
    <ul class="flex flex-row">
      <li v-for="job in jobs" :key="job.id">
        <JobItem
          :isSelected="selectedJob.name === job.name"
          :job="job"
          :time="time"
          @click="selectJob(job)"
        />
      </li>
    </ul>
    <div class="flex m-4 p-6 justify-center">
      <StepViewer :job="selectedJob" :time="time" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import JobItem from '@/components/JobItem.vue'
import StepViewer from '@/components/StepViewer.vue'
import type { Job } from '@/types'

export default defineComponent({
  name: 'PipelineSection',
  components: { StepViewer, JobItem },
  setup() {
    const landingJob = {
      id: 0,
      name: '',
      description: [
        {
          line: '[SUCCESS] - Select a job to get started!',
          color: 'text-green-500',
        },
      ],
      tags: [{ name: 'dummy', imgSrc: '/assets/img/profile-pic.jpg' }],
      status: 'N/A',
      link: false,
      duration: 'none',
      steps: [
        {
          name: 'Steps',
          duration: '',
          status: 'in-progress',
        },
      ],
    }
    const selectedJob = ref<Job>(landingJob)

    const selectJob = (job: Job): void => {
      selectedJob.value = job
    }

    const seconds = ref<number>(0)
    const minutes = ref<number>(0)

    const time = ref<string>('0s')

    onMounted(() => {
      setInterval(() => {
        if (seconds.value < 60) {
          seconds.value++
        } else {
          minutes.value++
          seconds.value = 0
        }
        time.value =
          minutes.value > 0
            ? `${minutes.value}m ${seconds.value}s`
            : (time.value = `${seconds.value}s`)
      }, 1000)
    })

    return { selectedJob, selectJob, time }
  },
  data() {
    return {
      jobs: [
        {
          id: 1,
          name: 'Build',
          description: [
            {
              line: '[00:00:00] - [WARN] Build: Outside of Frontend and Backend',
              color: 'text-yellow-500',
            },
            {
              line: '[00:00:01] - I have worked with custom Go CLI tools to standardize deployment across AWS workloads',
              color: 'text-white',
            },
            {
              line: '[00:00:01] - I also know my way around shell scripting and linux environments :-',
              color: 'text-white',
            },
            {
              line: '[00:00:02] - Just like the one this website is running on :)',
              color: 'text-white',
            },
            {
              line: '[00:00:05] - I also have experience with a wide host of CI/CD tooling:',
              color: 'text-white',
            },
            {
              line: '[00:00:13] - Screwdriver.cd, CircleCI, Github Actions, to name them all.',
              color: 'text-white',
            },
          ],
          tags: [
            { name: 'go', imgSrc: '/assets/img/go.png' },
            { name: 'linux', imgSrc: '/assets/img/linux.png' },
            { name: 'circleci', imgSrc: '/assets/img/circle-ci.png' },
          ],
          status: 'success',
          link: false,
          duration: '33s',
          steps: [
            {
              name: 'Innovating with Go',
              duration: '13s',
              status: 'success',
            },
            {
              name: 'Handling Linux',
              duration: '9s',
              status: 'success',
            },
            {
              name: 'Automating with CI/CD',
              duration: '11s',
              status: 'success',
            },
          ],
        },
        {
          id: 2,
          name: 'Publish',
          description: [
            {
              line: '[00:00:00] - [WARN] Publish: Docker, K8s, Helm... You Name it!',
              color: 'text-yellow-500',
            },
            {
              line: '[00:00:01] - I have worked with all the above technologies when it comes to deployment and Publishing:',
              color: 'text-white',
            },
            {
              line: '[00:00:01] - Docker Containers using both Docker & Podman',
              color: 'text-white',
            },
            {
              line: '[00:00:01] - Kubernetes, the manifests and kubectl commands',
              color: 'text-white',
            },
            {
              line: '[00:00:01] - Helm, the "charts"',
              color: 'text-white',
            },
            {
              line: '[00:00:01] - I have a handful of images floating around Amazon ECR, DockerHub and DOCR (Digital Ocean)',
              color: 'text-white',
            },
          ],
          tags: [
            { name: 'docker', imgSrc: '/assets/img/docker.png' },
            { name: 'kubernetes', imgSrc: '/assets/img/k8s.png' },
            { name: 'helm', imgSrc: '/assets/img/helm.png' },
          ],
          status: 'success',
          link: true,
          duration: '5s',
          steps: [
            {
              name: 'Containers',
              duration: '1s',
              status: 'success',
            },
            {
              name: 'Simple Deployments',
              duration: '2s',
              status: 'success',
            },
            {
              name: 'Orchastrating K8s',
              duration: '2s',
              status: 'success',
            },
          ],
        },
        {
          id: 3,
          name: 'Pre-deploy',
          description: [
            {
              line: '[00:00:00] - [WARN] Pre-Deploy: Infrastructure as Code!',
              color: 'text-yellow-500',
            },
            {
              line: '[00:00:10] - I have been exposed to tooling like Cloudformation (AWS) and Terraform (Hashicorp)',
              color: 'text-white',
            },
            {
              line: '[00:00:11] - Such tools help in predefining the infrastructure of applications in the cloud.',
              color: 'text-white',
            },
            {
              line: '[00:00:24] - "Just like this application and its Digital Ocean droplet being defined using Terraform"',
              color: 'text-white',
            },
            {
              line: '[00:00:30] - However I do like clicking buttons and interacting with UIs :P',
              color: 'text-white',
            },
          ],
          tags: [
            { name: 'terraform', imgSrc: '/assets/img/terraform.png' },
            { name: 'cloudformation', imgSrc: '/assets/img/cloudformation.png' },
          ],
          status: 'success',
          link: true,
          duration: '2m 32s',
          steps: [
            {
              name: 'IaC',
              duration: '30s',
              status: 'success',
            },
            {
              name: 'Templates',
              duration: '6s',
              status: 'success',
            },
            {
              name: 'Cloud & Terra',
              duration: '1m 56s',
              status: 'success',
            },
          ],
        },
        {
          id: 4,
          name: 'Deploy',
          description: [
            {
              line: '[00:00:00] - [WARN] Deploy: Cloud Services and Architecture',
              color: 'text-yellow-500',
            },

            {
              line: '[00:00:01] - I am pretty familiar with a lot of AWS Services:',
              color: 'text-white',
            },
            {
              line: '[00:00:01] - EKS, ECS, Fargate, EC2, & S3',
              color: 'text-white',
            },
            {
              line: '[00:00:02] - I am also familiar with a few Digital Ocean services like the droplet & DOCR services',
              color: 'text-white',
            },
            {
              line: '[00:00:02] - I would love to learn and use Vercel as a service, and will be doing so with my next project!',
              color: 'text-white',
            },
          ],
          tags: [
            { name: 'aws', imgSrc: '/assets/img/aws.png' },
            { name: 'digitalocean', imgSrc: '/assets/img/digitalocean.png' },
          ],
          status: 'in-progress',
          link: true,
          duration: 'dynamic',
          steps: [
            {
              name: 'Cloud',
              duration: '0s',
              status: 'success',
            },
            {
              name: 'Services',
              duration: '0s',
              status: 'success',
            },
            {
              name: 'Push',
              duration: 'dynamic',
              status: 'in-progress',
            },
          ],
        },
      ],
    }
  },
})
</script>
