import request from '@/utils/request'

// 分页
export function pageProcess (query) {
  return request({
    url: '/admin/workflow/task/api/resource/query',
    method: 'post',
    data: query
  })
}

// 审批
export function auditTask (query) {
  return request({
    url: '/admin/workflow/task/api/resource/audit',
    method: 'post',
    data: query
  })
}
