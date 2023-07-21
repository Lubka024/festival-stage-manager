import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Performances
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="stageManager/performance/create">
					Create new performance
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Performance" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="stageManager/performance/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<DateCell key="startTime" field="startTime" header="Start time" />
				<DateCell key="endTime" field="endTime" header="End time" />
				<HasOneSelectCell field="stage" header="stage" options="Stage.name" />
			</DataGridScope>
		</>
	)
}
