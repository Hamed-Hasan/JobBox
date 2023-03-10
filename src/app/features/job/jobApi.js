import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob: builder.mutation({
            query: (data) => ({
                url: "/job",
                method: "POST",
                body: data,
            }),
        invalidatesTags: ['jobs'],
        }),
        applyJob: builder.mutation({
            query: (data) => ({
                url: "/apply",
                method: "PATCH",
                body: data,
            }),
        invalidatesTags: ['jobs'],
        }),
        getJobs: builder.query({
            query: () => ({
                url: "/jobs",
            }),
            providesTags: ['jobs']
        }),
        getAppliedJobs: builder.query({
            query: (email) => ({
                url: `/applied-jobs/${email}`,
            }),
        }),
        getJobById: builder.query({
            query: (id) => ({
                url: `/job/${id}`,
            })
        }),
       

    })
})

export const { usePostJobMutation, useGetJobsQuery, useGetJobByIdQuery, useApplyJobMutation } = jobApi