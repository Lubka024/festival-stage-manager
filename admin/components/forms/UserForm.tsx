import * as React from 'react'
import { Component, HiddenField, RadioField, TextField } from '@contember/admin'

export const UserForm = Component(() => <>
	<HiddenField field="personId" />
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<RadioField
		field="role"
		label="Role"
		options={[{ value: 'admin', label: 'admin' }, { value: 'stageManager', label: 'stageManager' }]}
	/>
</>)
