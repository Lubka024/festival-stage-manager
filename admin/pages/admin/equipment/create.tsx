import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { EquipmentForm } from '../../../components/forms/EquipmentForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create equipment
			</SlotSources.Title>
			<CreateScope entity="Equipment" redirectOnSuccess="admin/equipment/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create equipment" labelSaved="Create equipment" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/equipment/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Equipment
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<EquipmentForm />
				</>
			</CreateScope>
		</>
	)
}
