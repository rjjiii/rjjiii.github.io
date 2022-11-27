---
layout: post
license: OSL
section: tools
title: Interval Tool
permalink: /tools/interval/
---

Interval Tool
version 1.0
Copyright (c) Robert Jones III 2020
Licensed under the Open Software License version 3.0

## Notes on the source code:

This html document is the preferred form of the Interval Tool for making modifications. If you received a native/binary application, that application was a wrapper around this document. There are no image files; what may look like icons are done via Unicode characters. There are also no sound files. Any sounds are created via javascript. All style sheets and scripts are embedded into this document. 

## Regarding the license:

This software is open source and licensed under the OSL 3.0. The license is publicly available from the Open Source Institute (OSI). The [license and a summary](https://opensource.org/licenses/OSL-3.0) are available on the OSI website.

## Goal of the Interval Tool:

Interval Recording can be difficult and very mentally taxing using traditional behavioral therapy tools. These issues are in part due to how attention and working memory function in the brain. People often overestimate their ability to multi-task, but humans have a natural limit in their working memory that hinders attempts to multi-task. Psychological research has shown that there is an attention cost for switching between tasks. This cost rises as the complexity of the tasks increase and as the differences between the tasks increase.[^1] These findings explain some of the difficulties in interval recording because multi-tasking is a core part of the method. Using traditional tools, a behavioral therapist would note a client's behavior on their clipboard, watch the time for upcoming intervals, observe the client's behavior, and often perform an additional task with the client related to the tracked behavior. Some computerized interval recording software imposes a greater load on a therapist's attention than the old clipboard and stopwatch method. The goal of this software is to reduce the load on the therapist's attention as much as possible.

The attention cost from task switching in interval recording increases as the length of the interval decreases. In a 2013 study, people used 15 seconds on average to switch between complex tasks.[^2] If therapists takes 15 seconds to task switch, a 30-second interval would result in a state of constant inattention and stress. Studies show that people compensate for task switching by pushing themselves to work beyond their limits at the cost of experiencing increased stress and frustration.[^3] This compensation will therefore reduce the quality of the therapy for the client, the quality of the client's data, and the quality of life for the therapist.

There are several strategies to reduce the load on a therapist's attention. The core is that the software should allow the therapist to input data while paying minimal attention to the device. This means that the clickers are always active, even if the timer is not running. It also means that the software saves data as soon as the therapist clicks; there's no separate "save" feature. Attention can be goal-directed, or it can be driven by external stimuli. The software should only use stimuli to attract the therapist's attention if (a) the interval is ending, (b) data needs to be recorded, or (c) both a+b. These are the only circumstances where the tool should use stimuli to attract attention. Beyond that, the software should stay active and full screen to avoid a waking/login procedure on the device designed to be full of attention-grabbing notifications. Finally, the therapist should have the option to deactivate any notifications, in case a specific type of stimuli (visual, auditory, tactile) is attracting their client's attention to the tool. The color changes are a core part of this strategy. Because the visual stimulus from the color changes occupies the entire background of the screen, the therapist can determine the state of data recording for the current interval with a glance at the device. There is no need to parse any additional information beyond that glance, thus reducing the load on a therapist's working memory and attention and allowing them greater focus on the client's therapy and data.
 
[^1]: Rubinstein, J. S., Meyer, D. E. & Evans, J. E. (2001). Executive Control of Cognitive Processes in Task Switching. Journal of Experimental Psychology:Human Perception and Performance, 27, 763-797.
   
[^2]: Gould, S. J. J., Cox, A. L., & Brumby, D. P. (2013). Frequency and duration of self-initiated task-switching in an online investigation of interrupted performance. Human computation and crowdsourcing: Works in progress and demonstration abstracts AAAI technical report CR-13-01 (pp. 22–23).
   
[^3]: Mark, G, Gudith, D, & Klocke, U. (2008). The cost of interrupted work. Proceedings of the Twenty-sixth Annual CHI Conference on Human Factors in Computing Systems – CHI ’08. Retrieved February 19, 2016 from https://ics.uci.edu/~gmark/chi08-mark.pdf.
