{{/*
Expand the name of the chart.
*/}}
{{- define "lumenrail.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
*/}}
{{- define "lumenrail.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "lumenrail.labels" -}}
helm.sh/chart: {{ include "lumenrail.name" . }}-{{ .Chart.Version | replace "+" "_" }}
{{ include "lumenrail.selectorLabels" . }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
app.kubernetes.io/part-of: lumenrail
{{- end }}

{{/*
Selector labels
*/}}
{{- define "lumenrail.selectorLabels" -}}
app.kubernetes.io/name: {{ include "lumenrail.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Service account name
*/}}
{{- define "lumenrail.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "lumenrail.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}
